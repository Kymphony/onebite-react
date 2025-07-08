/*
Node.js 라이브러리 사용하기

ㅇ 라이브러리란?
프로그램을 개발할때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것.

ㅇ npmjs.com
Node.js 라이브러리 백화점.

ㅇ node_mudules
라이브러리를 설치하면 생기는 디렉토리. 라이브러리를 보관하는 저장소.

ㅇ package-lock.json
설치한 라이브러리에 대한 정보를 package.json보다 더 정확하고 디테일하게 저장하는 파일.

*/

import randomcolor from "randomcolor";

const color = randomcolor();
console.log(color);
