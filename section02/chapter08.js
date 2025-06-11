/*
배열 메서드2. 순회와 탐색
5가지 요소 순회 및 탐색 메서드
*/

// 1.forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item);
  /*
  0 1
  1 2
  2 3
  */
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2.includes
// 배열에 특정 요서가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncludes1 = arr2.includes(3);
let isIncludes2 = arr2.includes(0);

console.log(isIncludes1, isIncludes2); // true false

// 3.indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index1 = arr3.indexOf(0);
let index2 = arr3.indexOf(1);

console.log(index1, index2); // -1 0

// 4.findIndex
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 모든 요소를 순회하면서, 콜백 함수를 만족하는 메서드 (콜백 함수를 만족한다: 콜백 함수가 참을 반환한다)
// indexOf와의 차이점: indexOf는 객체가 값으로 들어있는 배열에서는 위치(인덱스)를 찾지 못한다. findIndex는 객체 배열에서의 위치를 찾을 수 있다.
let arr4 = [1, 2, 3];
const res = arr4.findIndex((item) => {
  if (item % 2 === 0) return true;
});

console.log(res); // 1

// 간소화하기
const res2 = arr4.findIndex((item) => item % 2 === 0);
console.log(res2); // 1

// 객체 배열을 대상으로 활용하기
let objArr = [
  { name: "김성원", age: 35 },
  { name: "김주애", age: 32 },
  { name: "김유월", age: 1 },
  { name: "김선물", age: 0 },
];

let objRes1 = objArr.indexOf({ name: "김성원", age: 35 });
console.log(objRes1); // -1 // indexOf는 얕은 비교를 하기 때문에 객체 값을 비교할 수 없음.

let objRes2 = objArr.findIndex((item) => item.name === "김유월");

console.log(objRes2); // 2

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환한다.
let findRes = objArr.find((item) => item.age === 32);
console.log(findRes); // {name: '김주애', age: 32}
