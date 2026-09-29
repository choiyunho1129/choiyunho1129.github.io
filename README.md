# Yunho Choi — Academic website

소개, Education, Publications, Collaborators로 구성한 개인 학술 웹사이트 프레임입니다. 흰색, 검정, 회색 중심의 레이아웃에 사용자 사진을 넣었습니다. 이름, 제목, 본문에 참고 사이트와 같은 Lato를 사용합니다. 글꼴 파일을 함께 포함해 외부 요청 없이 동작합니다.

## 파일

- `index.html`: 이름, 소개, 학력, 논문, 동료 소개
- `styles.css`: 색상, 글꼴, 간격, 모바일 레이아웃
- `script.js`: 스크롤 위치에 따른 목차 표시와 연도 갱신
- `assets/me.jpeg`: 사용자가 제공한 프로필 사진
- `assets/fonts/`: Lato 글꼴(일반, 굵게, 기울임, 굵은 기울임)과 OFL 라이선스
- `.nojekyll`: 정적 파일을 그대로 게시하기 위한 빈 파일

## 내용 바꾸기

이름, 사진, About 소개 문장, Education의 서울대학교 석사 및 POSTECH 학사 이력에는 사용자 정보를 반영했습니다. Publications에는 제공한 arXiv 논문 세 편의 제목, 저자, 링크를 반영했습니다. Collaborators에는 Minjae Oh와 Jongwon Lim의 이름, 개인 홈페이지 링크 및 사용자와 함께 다듬은 편지 문장을 넣었습니다.

1. `index.html`의 About 본문에서 소개와 연구 내용을 수정합니다. Data Science, Seoul National University, Prof. Yohan Jo에는 사용자가 제공한 링크를 연결했습니다. 프로필에는 Yunho Choi 이름만 표시합니다.
2. Education의 `education-entry` 항목에서 학교, 학위, 지도교수, 기간을 수정합니다. 최신순으로 Seoul National University, Master in Data Science, Prof. Yohan Jo, 2025년 9월–현재와 Pohang University of Science and Technology (POSTECH), B.S., Industrial & Management Engineering, Prof. GwangJae Kim, 2019년 3월–2025년 8월을 반영했습니다.
3. Publications의 `publication` 항목에서 논문 제목, 저자, 학회·저널, 연도를 수정합니다. 제목은 논문 링크로 연결되며 Yunho Choi 이름은 강조됩니다. 앞의 두 편은 사용자가 알려준 NeurIPS 2026으로, 마지막은 Under review로 표시했습니다. 마지막 논문의 연도는 arXiv 최초 제출 연도인 2025입니다.
4. Collaborators의 각 `li` 항목에서 이름, 홈페이지 링크와 편지 문장을 수정합니다. 현재 [Minjae Oh](https://riasok.github.io/)와 [Jongwon Lim](https://elijah0430.github.io/)을 데스크톱에서는 좌우로, 모바일에서는 세로로 표시합니다. 각 이름 바로 아래에는 짧은 편지 문장이 들어갑니다.
5. 항목이 더 필요하면 해당 `li`나 `article`을 복사합니다.

## 미리보기와 GitHub Pages

`index.html`을 브라우저로 열면 바로 볼 수 있습니다. 별도의 설치나 빌드가 필요하지 않습니다.

GitHub Pages 게시 시 이 폴더 안의 파일을 저장소의 게시 폴더에 함께 넣으면 됩니다. 모든 파일 참조는 상대 경로이므로 사용자 사이트와 프로젝트 사이트 모두에 맞게 구성되어 있습니다.

글꼴 참고: [Cheyon Jin 웹사이트의 스타일시트](https://hzlcodus.github.io/website/stylesheet.css). 해당 스타일시트에서 사용하는 Google Fonts의 Lato 파일을 포함했습니다. 배포 시 `assets/fonts/Lato-OFL.txt`를 함께 포함하세요.

논문 정보 출처: [arXiv:2605.07579](https://arxiv.org/abs/2605.07579), [arXiv:2605.07865](https://arxiv.org/abs/2605.07865), [arXiv:2509.19893](https://arxiv.org/abs/2509.19893). 제목과 저자 순서는 arXiv 메타데이터를 따르며, 학회와 심사 상태는 사용자가 제공한 정보를 따릅니다.
