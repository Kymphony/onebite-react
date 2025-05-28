/*
Truthy & Falsy
자바스크립트에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다
*/

if (123) {
  console.log("123 is true"); // 실행행
} else {
  console.log("123 is false");
}

if (undefined) {
  console.log("undefined is true");
} else {
  console.log("undefined is false"); // 실행
}

// 1. Falsy한 값 - 총 7개
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // big integer. 아주 큰 값을 저장할때 쓴다고 한다.

if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값
// 7가지 falsy한 값을 제외한 나머지 모든 값
let t1 = "hello"; // 비어있지 않은 문자열
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log("truthy");
}

// 3. 활용 사례
function printName(person) {
  if (person.name) {
    // person.name이 falsy한 값: null, undefined, "" 일때는 실행하지 않도록 Trythy 값일때만 실행
    // 반면 Truthy & Falsy를 사용하지 않는다면 if(person.name !== undefined || person.name !== null || person.name !== "") 처럼 코드가 매우 길어진다.
    console.log(person.name);
  }
}

let person = {
  name: "나여 백종원",
};

printName(person);
