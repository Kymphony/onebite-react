/*
객체 1
- 원시 타입이 아닌 객체 타입의 자료형
- 여러가지 값을 동시에 저장할 수 있는 자료형을 의미
*/

// 객체를 이용하면 현실세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함
// 김성원을 객체로 표현하기

let person = {
  name: "김성원",
  age: 35,
  localtion: "효천지구",
  marriage: "Y",
};

// 1. 객체 생성
// 생성자 사용한 방식
let obj1 = new Object(); // 객체 생성자
// 중괄호 사용한 방식 - 훨신 간결하기 때문에 대부분 이 방법 사용
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티
let person2 = {
  name: "김성원", // 객체 프로퍼티, 또는 객체 속성이라고 한다
  age: 35,
  hobby: "수영",
  job: "FE Developer",
  extra: {},
  10: 20, // 프로퍼티의 키 값에는 숫자도 쓸 수 있다
  "like dog": true, // 키 값에 띄어쓰기가 필요하다면 따옴표로 감싸준다
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근하는 방법(점 표기법, 괄호 표기법)
let name = person2.name;
console.log(name); // 김성원

let age = person2["age"]; // 꼭 쌍따옴표를 써야 함. 그렇지 않으면 age를 변수로 인식.
console.log(age); // 35

let prop = "hobby";
let hobby = person2[prop];
console.log(hobby); // 수영

// 3.2 새로운 프로퍼티를 추가하는 방법
person2.job = "Server Developer";
person2["favoriteFood"] = "치킨";

//console.log(person2);
/*
10: 20
age: 35
extra: {}
favoriteFood: "치킨"
hobby: "수영"
job: "Server Developer"
like dog: true
name: "김성원"
*/

// 3.3 프로퍼티를 수정하는 방법
person2.job = "월급 루팡";
person2["favoriteFood"] = "삼겹살";
//console.log(person2);

// 3.4 프로퍼티를 삭제하는 방법 - delete 연산자 사용
delete person2.job;
delete person2["favoriteFood"];
console.log(person2);
/*
10: 20
age: 35
extra: {}
hobby: "수영"
like dog: true
name: "김성원"
*/

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 - in 연산자
let result1 = "name" in person2;
console.log(result1); // true
