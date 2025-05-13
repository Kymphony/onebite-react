/*
연산자 2
*/

// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능. null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = var1 ?? var2;
console.log(var3); // 10

// 비교하는 두 값 모두 null이나 undefined가 아닌 경우, 앞에 있는 변수를 할당
let var4 = 20;
let var5 = var3 ?? var4;
console.log(var5); // 10

// 2. typeof 연산자
// 값의 타입(자료형)을 문자열로 반환
let t1 = 1;
let t2 = "1";
let t3 = true;
console.log(typeof t1); // number
console.log(typeof t2); // string
console.log(typeof t3); // boolean

if (typeof t2 === typeof "" && typeof t1 === "number") {
  console.log("형이야"); // 출력 O
}

// 3.삼항 연산자
// 항을 3개 사용한다.
// 조건식을 이용하여 참, 거짓일때의 값을 다르게 반환
// 요구사항: 변수 res에 var8의 값이 짝수일 경우 "짝", 홀수일 경우 "홀"
let var8 = 10;
let res = var8 % 2 === 0 ? "짝" : "홀";
// 변수 선언 = 조건식 ? 조건식이 참일때 반환값 : 조건식이 거짓일때 반환값;
console.log(res); // 짝
