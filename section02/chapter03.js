/*
구조 분해 할당
: 배열이나 객체에 저장된 여러 개의 값들을 분해해서 각각 다른 변수에 할당하는 문법
*/

// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// 기존의 불편한 방식으로 변수에 할당
let var1 = arr[0];
let var2 = arr[1];
let var3 = arr[2];

// 구조 분해 할당 이용
let [var4, var5, var6] = arr;
console.log(var4, var5, var6); // 1 2 3

// 배열의 갯수보다 더 많은 변수를 입력시
let [var7, var8, var9, var10 = 10] = arr;
console.log(var7, var8, var9, var10); // 1 2 3 10

// 2. 객체의 구조 분해 할당
let person = {
  name: "김성원",
  age: 35,
  hobby: "자동차",
};

let { name, age, hobby } = person; // 프로퍼티의 키 값을 기준으로 변수가 선언되고 값이 매칭된다.
console.log(name, age, hobby); // 김성원 35 자동차

let { one, two, three } = person;
console.log(one, two, three); // undefined undefined undefined

// 변수의 이름을 달리 해서 값을 할당 받고 싶을때
let { name: 이름, age: old, hobby: concern } = person;
console.log(이름, old, concern); // 김성원 35 자동차

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 일반적인 방식
const func = (person) => {
  console.log(person.name);
  console.log(person.age);
  console.log(person.hobby);
};

func(person);

// 구조 분해 할당 이용
const func2 = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func2(person);

// 배열을 매개변수로 던지기
const func3 = ([test1, test2, test3]) => {
  console.log(test1, test2, test3);
};

func3(arr);
