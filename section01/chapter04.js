console.log("chapter04");

// 1.변수
let age; // 선언은 하였으나 초기화되지 않은 변수
console.log(age); // undefined

age = 30;
console.log(age);

// 2. 상수
// 변수와 달리 한번 저장된 값을 바꿀 수 없다.
// 값을 바꿀수 없기 때문에 선언과 동시에 초기화가 반드시 필요하다.
const birth = "1990.04.13";
birth = "123"; // Uncaught TypeError: Assignment to constant variable.

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let #name;
let na#me;
let $_name;
let $;
let _;

// 3-2. 변수 이름은 숫자로 시작할 수 없다.
let name1;
let 1name;

// 3-3. 변수 이름에 예약어를 사용할 수 없다.
// 예약어: var, let, const, if처럼 자바스크립트에서 사용하기로한 약속된 단어
let let;
let const;
let if;

// 4. 변수 명명 가이드
// 4-1. 변수 이름은 값을 유추할 수 있어야 한다. ex) totalCnt

