/*
Spread 연산자  &  Rest 매개변수
*/

// 1. Spread 연산자
// Spread : 흩뿌리다, 펼치다 라는 뜻
// : 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// arr2 배열의 4와 5사이에 arr1을 넣고싶다. 그러면 보통 아래와 같은 방법으로 한다.
arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

// spread 연산자 이용
arr2 = [4, ...arr1, 5, 6];
console.log(arr2); // [4,1,2,3,5,6]

// 객체 버전
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  // 연산자 없이
  //a: obj1.a,
  //b: obj1.b,
  // spread 연산자 사용
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2); // {a: 1, b: 2, c: 3, d: 4}

// spread 연산자를 함수 매개변수로 전달하기
const test = (p1, p2, p3) => {
  console.log(p1, p2, p3);
};

test(...arr1); // 1 2 3

// 2. Rest 매개 변수
// Rest: 나머지, 나머지 매개변수
// 함수에 전달된 여러개의 매개변수를 한꺼번에 받을 수 있음
// ...(변수이름) 형태. 변수 이름은 뭘 해도  상관없다. rest는 예시임.
function test2(...rest) {
  // * spread 연산자가 아니라 rest 매개변수임. 둘을 구분할것
  console.log(rest);
}

test2(...arr1); // [1, 2, 3]
//test2(...obj1); // Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function at ~

// 앞에서부터 순서대로 다른 변수를 선언하여 전달받을수도 있다.
// * 변수는 rest 매개변수의 앞에만 선언할수 있으며 function test3(...rest, first, second) 처럼 매개변수의 뒤에 선언하면 오류 발생
function test3(first, ...rest) {
  console.log("first", first); // first 1
  console.log("rest", rest); // [2, 3]
}

test3(...arr1);
