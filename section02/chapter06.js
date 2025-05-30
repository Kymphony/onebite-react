/*
반복문으로 배열과 객체 순회(Iteration)하기

순회(Iteration)란?
: 배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것을 말함
*/

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1) 배열 인덱스를 이용한 순회
for (let i = 0; i < arr.length; i++) {
  // 배열 역시 객체. 배열이 가지는 내장 프로퍼티 length
  console.log(arr[i]);
}

// 1-2) for of 반복문
// 오직 배열을 순회하기 위해 존재하는 특수한 반복문. 인덱스를 활용할 수 없다는 단점.
for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회
let person = {
  name: "김성원",
  location: "효천지구",
  wife: "김주애",
};

// 2-1) Object.keys 이용한 순회
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
//console.log(keys); // ['name', 'location', 'wife']
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}
for (let key of keys) {
  console.log(key, person[key]);
}

// 2-2) Object.values 이용한 순회
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value); // 김성원 효천지구 김주애
}

// 2-3) for in 반복문 이용한 순회
// 오직 객체를 순회하기 위해 존재하는 특수한 반복문
for (let key in person) {
  const value = person[key];
  console.log(key, ": ", value);
}

// for of 반복문 - 배열만 순회
// for in 반복문 - 객체만 순회
