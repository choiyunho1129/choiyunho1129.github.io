// The page and anchor navigation work without JavaScript.
const sectionLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = sectionLinks.map((link) => document.querySelector(link.hash));
let updatePending = false;

function updateNavigation() {
  const threshold = Math.min(window.innerHeight * 0.3, 220);
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) activeSection = section;
  }
  if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeSection = sections[sections.length - 1];
  }
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

window.addEventListener('scroll', scheduleNavigationUpdate, { passive: true });
window.addEventListener('resize', scheduleNavigationUpdate);
window.addEventListener('hashchange', scheduleNavigationUpdate);
document.getElementById('year').textContent = new Date().getFullYear();
updateNavigation();
