/*
단락 평가(Short-circuit Evaluation)

단락 평가란?
첫번째 피연산자로 단락의 결과가 확정된다면 두번째 피연산자는 보지 않는 자바스크립트의 특징을 말함.
이러한 특성을 활용해 조건문을 생략하여 코드를 작성하는 등 다양한 활용을 할 수 있다.
*/

let varA = false;
let varB = true;

console.log(varA && varB); // varA가 false이기 때문에 varB는 보지 않고 바로 false 출력
console.log(varB || varA); // varB가 true이기 때문에 varA는 보지 않고 바로 true 출력

function returnF() {
  console.log("false 함수");
  return false;
}

function returnT() {
  console.log("true 함수");
  return true;
}

console.log(returnF() && returnT()); // returnF 함수만 호출, returnT에는 접근X
console.log(returnT() && returnF()); // 두 함수 모두 호출

console.log(returnT() || returnF()); // returnT 함수만 호출, returnF에는 접근X

// 단락 평가는 true & false 뿐만 아니라 truthy, falsy 값에도 적용된다.

function returnFlsy() {
  console.log("falsy 함수");
  return undefined;
}

function returnThy() {
  console.log("truthy 함수");
  return 1;
}

console.log(returnThy() || returnFlsy()); // returnThy() 함수만 호출
console.log(returnFlsy() && returnThy()); // returnFlsy() 함수만 호출

// 단락 평가 활용 사례
function printName(person) {
  /*
  // 단락 평가 미활용 코드
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }
  console.log(person.name);
  
  // 단락 평가 활용 코드
  console.log(person && person.name);
  */

  // 단락 평가 활용 코드 심화
  const name = person && person.name;
  console.log(name || "person 값이 없음");
}

let person = { name: "김성원" };

printName(person);

// truthy || truthy 일때 반환값: 첫번째 truthy 값
// truthy && truthy 일때 반환값: 두번째 truthy 값
