/*
배열 메서드 3. 변형
5가지 배열 변형 메서드
*/

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "김주애", age: 32 },
  { name: "정하율", age: 5 },
  { name: "정하준", age: 3 },
];

let oldPeople = arr1.filter((item) => item.age > 3);

console.log(oldPeople); // 0: {name: '김주애', age: 32}, 1: {name: '정하율', age: 5}

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
let mapRes = arr2.map((item, idx) => {
  return item * 2;
});

console.log(mapRes); // [2, 4, 6]

let names = arr1.map((item) => {
  return item.name;
});

console.log(names); // ['김주애', '정하율', '정하준']

// 3. sort
// 배열을 사전순으로 정렬하는 메서드. 배열의 순서를 직접 수정한다.
// 문자열 값은 정렬하나 숫자 값은 정렬하지 못함.
let arr3 = ["a", "b", "c"];
arr3.sort();

console.log(arr3); // ['a', 'b', 'c']

let arr3Num = [1, 2, 3];
arr3Num.sort();

console.log(arr3Num); // [1, 2, 3]

// sort에 콜백함수를 이용하여 숫자 값을 내림차순으로 정렬하기
arr3Num.sort((a, b) => {
  if (a < b) {
    return 1; // 더 큰 수를 앞으로 보내기. 1을 반환하면 더 큰수를 앞으로 보낸다.
  } else if (a > b) {
    return -1; // 더 작은 수를 뒤로 보내기. 음수를 반환하면 뒤로 보낸다.
  } else {
    return 0; // 값이 같을때 순서 바꾸지 않기.
  }
});

console.log(arr3Num); // [3, 2, 1]

// 4. toSorted
// sort와 마찬가지로 배열을 정리한다.
// 차이점은 원본 배열은 놔두고 새로운 배열을 반환한다는 점이다.
// 가장 최근에 추가된 최신 함수.
let arr5 = ["c", "b", "a"];
let sortedArr = arr5.toSorted();

console.log(sortedArr); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["Im", "Your", "father"];
let joinedArr = arr6.join();

console.log(joinedArr); // Im,Your,father

// 각 배열 요소의 구분자로써 쉼표가 들어가는데 매개변수를 이용하여 쉼표를 다른 문자로 대채할 수 있다.
joinedArr = arr6.join(" ");
console.log(joinedArr); // Im Your father
