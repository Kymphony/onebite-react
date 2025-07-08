/*
Node.js 모듈 시스템 이해하기

모듈 시스템: 모듈을 다루는 시스템

모듈(Module)이란?
쇼핑앱에서 회원 관리 기능, 장바구니 기능, 결제 기능 등을 기능별로 파일을 분리하여 개발한 것.
ex: user.js, cart.js, payment.js 등

JavaScript의 모듈 시스템
- Common JS(CJS)
- ES Module(ESM)
- 등등(AMD, UMD)

*/

// Common JS(CJS) 활용하기: module.exports와 require
/*
const moduleData = require("./src/math");
console.log(moduleData); // { add: [Function: add], sub: [Function: sub] }

console.log(moduleData.add(1, 2)); // 3
console.log(moduleData.sub(1, 2)); // -1

// 구조분해할당 활용하여 모듈 가져오기
const { add, sub } = require("./src/math");
console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
*/

// ES Module(ESM) 모듈 사용하기: export와 import
// package.json에 "type": "module" 추가하기
// 패키지에 ESM을 사용하겠다고 설정한 후에는 CJS를 사용하는 코드는 에러가 발생한다.(함께 이용 불가)
import { add, sub } from "./src/math.js"; // ESM을 사용할때는 파일의 확장자명까지 쓴다.

//console.log(add(1, 2));
//console.log(sub(1, 2));

import { add2, sub2 } from "./src/math.js";

console.log(add2(1, 2));
console.log(sub2(1, 2));

import mul from "./src/math.js"; // default 함수를 가져올때는 중괄호를 쓰지 않고, 이름도 맘대로 정해서 가져올 수 있다.
console.log(mul(1, 2)); // 2

// 동일한 여러개의 함수를 가져올때 import 합치기
import mul, { add2, sub2 } from "./src/math.js";
