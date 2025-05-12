/* 자사스크립트의 자료형(Data type) */

// 1. 원시 타입(또는 기본형 타입)
// Number, String, Boolean, Null, Undefined

// 1-2. String type
// 큰따옴표 "", 작은 따옴표''를 모두 사용할 수 있다.
// 백틱(backtick)``을 사용할 수 있는데(자판이 영문인 상태에서 1 왼쪽의 물결표시 버튼)
let int = ``;
// 백틱을 사용하면 문자열 안에 변수를 동적으로 호출하여 사용할 수 있다.
let myName = "성원";
let myThink = "집에 가고 싶다";
let mySituation = `${myName}이는 ${myThink}`; // 이렇게 작성된 코드를 '템플릿 리터럴 문법'이라고 한다.
console.log(mySituation); // 성원이는 집에 가고 싶다
// 따옴표를 이용하면 +를 사용하여 조합해야 하지만 백틱은 끊김 없이 문자열로 이을 수 있는게 장점.

// 1-4. Null (아무것도 없다)
// 1-5. Undefined (변수를 선언하고 아무 값도 입력하지 않았을때 자동으로 할당되는 값)
// (반면 null은 명시적으로 할당해줘야 되는 값)

// 2. 객체 타입
// Object - Array, Function, RegexExp
