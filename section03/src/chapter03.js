/*
Node.js 사용하기


ㅇ패키지란?
"프로젝트": 특정 목적을 갖는 프로그램의 단위.
ex: 쇼핑몰 프로젝트, 웹 포털 프로젝트.

Node.js에서는 프로젝트 대신 "패키지"를 사용한다.
"패키지": Node.js에서 사용하는 프로그램의 단위.
ex: 쇼핑몰 패키지, 웹 포털 패키지


ㅇ패키지 생성하기
- VSC에서 터미널 창 여는 단축키: 컨트롤 + J
- 커맨드 실행: npm init (새로운 패키지 생성 또는 초기화)
- 패키지 정보 입력값은 영상 참고(깃 리포지토리 외에는 입력한것 없음)

{
  "name": "section03",
  "version": "1.0.0",
  "description": "node.js study",
  "main": "chapter03.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Kymphony/onebite-react.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Kymphony/onebite-react/issues"
  },
  "homepage": "https://github.com/Kymphony/onebite-react#readme"
}

*/

console.log("안녕 Node.js");

// 브라우저가 아닌 Node.js 이용하여 콘솔 출력하기
// 터미널에서 node chapter03.js 실행

// 패키지 스크립트 작성하기
// node 의 실행 대상 파일이 경로가 달라지면 node 커맨드 실행마다 경로를 다 적어야 하기 때문에 불편.
// 이를 편하게 하기 위해 package.json 안에 "start" 지시자를 추가해준다.
