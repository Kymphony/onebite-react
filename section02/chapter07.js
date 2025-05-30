/*
배열 메서드 1. 요소 조작

6가지의 요소 조작 메서드
*/

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// 메서드를 실행한 후의 배열 길이를 반환한다.
let arr1 = [];
arr1.push(1);
arr1.push(2, 3, 4);
console.log(arr1); // [1, 2, 3, 4]

const arr1length = arr1.push(5);
console.log(arr1length); // 5

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 제거한 값을 반환한다.
const popres = arr1.pop();
console.log(arr1, popres); // [1, 2, 3, 4] 5

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 제거한 값을 반환한다.
const shiftres = arr1.shift();
console.log(arr1, shiftres); // [2, 3, 4] 1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드(push와 반대). unshift 실행 후 배열의 길이를 반환한다.
const unshiftres = arr1.unshift(1);
console.log(arr1, unshiftres); // [1, 2, 3, 4] 4

// 5. slice
// 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// slice(자르기 시작할 인덱스, 자르기를 멈출출 인덱스*)
// * n번째 인덱스까지 자르고 싶다면 n+1 값을 두번째 인수로 입력
const slicedArray = arr1.slice(1, 3); // 두번째 인덱스부터 세번째(2+1) 인덱스까지 자르기
console.log(slicedArray, ", ", arr1); // [2, 3], [1, 2, 3, 4]

// 두번째 인수를 생략하면 지정 인덱스부터 끝 요소까지 다 자른다.
const slicedToEndArray = arr1.slice(1);
console.log(slicedToEndArray, ", ", arr1); // [2, 3, 4], [1, 2, 3, 4]

// 뒤에서 부터 인수를 자르고 싶으면 인수에 -(자르고 싶은 인덱스 수) 를 입력하면 된다.
const slicedByBack = arr1.slice(-2);
console.log(slicedByBack, ", ", arr1); // [3, 4] ', ' [1, 2, 3, 4]

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr2 = [5, 6, 7, 8];
const concatres = arr1.concat(arr2);
console.log(concatres); // [1, 2, 3, 4, 5, 6, 7, 8]
const concatres2 = arr2.concat(arr1);
console.log(concatres2);
