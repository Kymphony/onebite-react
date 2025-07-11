/*
React.js를 소개합니다

페이스북(현 메타)이 개발한 오픈소스 JavaScript 라이브러리
대규모 웹 서비스의 UI를 더 편하게 개발하기 위해 만들어진 기술

ㅇ Raact의 기술적인 특징
1. 컴포넌트를 기반으로 UI를 표현한다.
- 웹 페이지가 Header.js, Main.js, Footer.js 로 구성되어있다면, 각 영역을 컴포넌트로 만들어 모듈화할 수 있다.
- 중복코드를 제거하는데 장점이 있다.

2. 화면 업데이트 구현이 쉽다.
- 업데이트란? 사용자의 행동(클릭, 드래그)에 따라 웹페이지가 스스로 모습을 바꿔 상호작용하는 것.
- React.js는 선언형 프로그래밍이라는 방식으로 동작한다.
- 선언형 프로그래밍이란 과정은 생략하고 목적만 간결히 명시하는 방법이다. (반대개념: 명령형 프로그래밍. 토마토 파스타를 만드는 모든 과정에 대한 명령 필요. ex: JS)
ex) "토마토 파스타 하나 주세요" (토마토 파스타 만드는 과정은 잘 모르겠고, 내가 필요한건 토마토 파스타다.)
- 이를 위해 컴포넌트 내부의 "state" 변수를 사용한다. state는 값에 따라 다른 UI를 출력한다.

3. 화면 업데이트가 빠르게 처리된다.
- 브라우저의 렌더링 과정(Critical Rendering Path: 렌더링을 위해 꼭 거쳐야 하는 과정)
    HTML: HTML > DOM > Render Tree > Layout > Painting
    CSS: CSS > CSSOM > Render Tree > Layout > Painting
- JavaScript가 DOM을 수정하면 화면에 업데이트가 발생한다.
    JS > DOM > Render Tree > Layout > Painting
- 그런데 Layout과 Painting은 시간이 많이 소요되는 과정이다.(Reflow: Layout을 다시한다, Repaint: Painting을 다시 한다.)
- Virtual DOM: DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판.
- React.js는 업데이트 발생시 DOM을 수정하지 않고 Virtual DOM을 먼저 수정한다. 동시에 발생한 여러개의 업데이트를 Virtual DOM에 모아놨다가 한꺼번에 DOM에 반영하여
업데이트에 걸리는 시간을 단축한다.
*/
