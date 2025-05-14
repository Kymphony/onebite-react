/*
함수 표현식과 화살표 함수
*/

// 1. 함수 표현식

// 함수를 변수에 담아보자
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);
/*
출력내용:
ƒ funcA() {
  console.log("funcA");
}

자바스크립트에서는 함수도 숫자나 문자열같은 하나의 값으로 취급하기 때문에
함수의 내용 자체가 변수에 대입됨.
*/

// 변수를 이용하여 변수에 담긴 함수 호출도 가능
//varA(); // funcA

// 이렇게 자바스크립트의 특징을 활용하여 함수를 선언하지 않고 변수에 담듯이 함수를 만들 수 있다. (함수 표현식)
let varB = function funcB() {
  console.log("funcB");
};

varB(); // funcB

// 값으로서 함수가 담긴 것이지 함수가 선언된것이 아니기 때문에 함수명으로는 함수가 호출되지 않는다.
//funcB(); // Uncaught ReferenceError: funcB is not defined

// 그렇기 때문에 변수에 함수를 담을때는 함수의 이름을 지정할 필요가 없다.
let varC = function () {
  console.log("그리고 이러한 함수를 익명 함수라고 한다.");
};
//varC();

// 익명 함수들은 호이스팅이 되지 않는다.

// 2. 화살표 함수
// 익명 함수를 더 빠르고 간결하게 생성하도록 도와줌

// 기존의 익명 함수 생성 방식
let example1 = function () {
  return 1;
};

// 화살표 함수 생성 방식
let example2 = () => {
  return 1;
};
console.log(example2()); // 1

// 더 간결화된 생성 방식(단순히 값을 리턴하기만 한다면)
let example3 = () => 3;
console.log(example3()); // 3

// 여기서 매개변수를 활용한다면
let example4 = (param) => param + 1;
console.log(example4(1)); // 2

// 단순히 값을 반환하지 않고 추가적인 처리가 있다면 중괄호를 추가한다.
let example5 = (param) => {
  console.log(param);
  return param + 1;
};

console.log(example5(10)); // 11
