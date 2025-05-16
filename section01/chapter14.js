/*
스코프(Scope)
- 우리말로 "범위"를 뜻함
- 변수나 함수에 접근하거나 호출할 수 있는 범위를 말함
*/

function funcA() {
  let a = 1;
}

// 함수 안에 있는 변수를 함수 외부에서 호출할 수 없음
//console.log(a); // Uncaught ReferenceError: a is not defined

// 스코프: 전역(전체 영역) 스코프, 지역(특정 영역) 스코프
// 전역 스코프: 전체 영역에서 접근 가능
// 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프를 갖는 변수

function area() {
  let b = 1; // 지역 스코프
  console.log(a); // 1
}

if (true) {
  let c = 1; // 지역 스코프
}

for (let i = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
}

// 중괄호 {} 내에 선언된 모든 변수는 지역 스코프를 갖는다.
// 마찬가지로 함수 안에 선언된 함수도 지역 스코프를 갖는다.

function outerFunc() {
  function innerFunc() {
    console.log("라라");
  }
}

//innerFunc(); // Uncaught ReferenceError: innerFunc is not defined

// 단, 예외적으로 if문이나 for 문 안에 있는 함수는 전역 스코프를 갖는다.
// 함수는 함수 안에 있을때만 지역 스코프를 갖는다.

for (let i = 0; i < 5; i++) {
  function innerFunc() {
    console.log(i);
  }
}

innerFunc(1); // 4
