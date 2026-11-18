// The page and anchor navigation work without JavaScript.
const sectionLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let updatePending = false;
let requestedSection = sections.find((section) => `#${section.id}` === window.location.hash) || null;

function updateNavigation() {
  const threshold = Math.min(window.innerHeight * 0.3, 220);
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) activeSection = section;
  }
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeSection = sections[sections.length - 1];
  }
  if (requestedSection) activeSection = requestedSection;
  for (const link of sectionLinks) {
    if (link.hash === `#${activeSection.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  updatePending = false;
}

function scheduleNavigationUpdate() {
  if (!updatePending) {
    updatePending = true;
    window.requestAnimationFrame(updateNavigation);
  }
}

function resumeScrollNavigation() {
  requestedSection = null;
  scheduleNavigationUpdate();
}

for (const link of sectionLinks) {
  link.addEventListener('click', () => {
    requestedSection = document.querySelector(link.hash);
    scheduleNavigationUpdate();
  });
}
window.addEventListener('wheel', resumeScrollNavigation, { passive: true });
window.addEventListener('touchstart', resumeScrollNavigation, { passive: true });
window.addEventListener('pointerdown', resumeScrollNavigation, { passive: true });
window.addEventListener('keydown', (event) => {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)) resumeScrollNavigation();
});
window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
window.addEventListener('hashchange', () => {
  requestedSection = sections.find((section) => `#${section.id}` === window.location.hash) || null;
  scheduleNavigationUpdate();
});
document.getElementById('year').textContent = new Date().getFullYear();
updateNavigation();
