/*
배열
: 여러 개의 값을 "순차적"으로 담을 수 있는 자료형.
: 객체와의 차이점은 값을 "순차적"으로 담는다는 것.
*/

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴

// 어떠한 타입의 값이든 다 저장할 수 있다.
let arrC = [1, 2, 3, "문자열", true, false, null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[3];
let item3 = arrC[8];
console.log(item1, item2, item3); // 1 '문자열' () => {}

arrC[3] = "배열 요소 수정";
console.log(arrC[3]); // 배열 요소 수정
