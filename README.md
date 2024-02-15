# 가위 바위 보 게임

[가위 바위 보](https://spiffy-eclair-9798b2.netlify.app/) 바로가기

## 제작 기간

- 2024/02/15

## 사용 기술 스택

- Programming

    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"> <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JAVASCRIPT&logoColor=white">

- 배포

    <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">

## 사용 주요 개념

- document.querySelector()
- Math.random()
- Math.floor()
- Element.innerHTML
- Node.textContent
- Element.style
- switch() {case ?: code}

## 프로젝트 구현 사항

- header의 title인 [가위 바위 보]를 클릭하면 초기화
- 유저는 하단의 버튼을 하나 선택할 수 있고 hover시 버튼 확대 및 배경색 변경
- 가위, 바위, 보 선택시 컴퓨터와 유저를 나타내는 요소가 각자 선택한 가위, 바위, 보로 변경
- 해당 요소가 승패에 따라 빨간색, 노란색, 파란색(패무승)으로 배경색 변경
- 승패에 따라 결과를 text 형태로 반환하고 점수판의 점수 변경

## 이후 추가할 구현 사항

- 가위 바위 보 승패 기록 하단에 추가
- 점수판의 컴퓨터와 유저의 점수를 HTML 요소의 text content가 아닌 JS의 변수로 관리