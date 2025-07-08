function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// Common JS(CJS) 활용하기
/*
module.exports = {
  add: add, // 프로퍼티 명: 내보낼 함수 명
  sub: sub,
};
*/

// ESM 모듈 활용하기
export { add, sub };

// 함수 선언문 앞에 export 붙이기
export function add2(a, b) {
  return a + b;
}

export function sub2(a, b) {
  return a - b;
}

// export default 활용하기
export default function multiply(a, b) {
  return a * b;
}
