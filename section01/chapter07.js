/* 
연산자(Operator)
- 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함.
=, +, *, -, /, %

1. 대입 연산자 =
2. 산술 연산자 + - * / %
 % -> 모듈러 연산자라고 한다
*/

// 3. 복학 대입 연산자(산술 연산자와 대입 연산자가 복합되어 있다)
// 기존의 변수의 값에 값을 더할 때 일반적인 방법
let num7 = 10;
num7 = num7 + 20;

// 복합 대입 연산자 사용
let num8 = 10;
num8 += 20;
console.log(num8); // 30

num8 -= 20;
console.log(num8); // 10

num8 *= 10;
console.log(num8); // 100

num8 /= 5;
console.log(num8); // 20

num8 %= 3;
console.log(num8); // 2

// 4. 증감 연산자(규칙은 자바와 같다)
// ++num8 : 전위 연산자 - 즉시 연산
// num8++ : 후위 연산자 - 줄바꿈 후 연산

// 5. 논리 연산자
// or, and, not
// not 연산자는 !true 의 의미를 가짐. true 라면 false로, false 라면 true로 반전

// 6. 비교 연산자(값이 동등한지, 다른지 비교하여 true/false를 반환)
// 동등 연산자 ===
// 비동등 연산자 !==
let comp1 = 1 === 2;
console.log(comp1); // false
comp1 = 1 === 1;
console.log(comp1); // true
comp1 = "t" === "t";
console.log(comp1); // true
comp1 = "t" !== "t";
console.log(comp1); // false

/* 
(!) 다른 언어의 비교 연산자와 달리 = 을 3번 쓰는 이유 
== 으로도 비교가 되지만 자료형은 구분하지 못함.
let comp1 = 1 == "1"
console.log(comp1); // true
let comp1 = 1 === "1"
console.log(comp1); // false
*/

// 대소 비교 연산자
let comp3 = 2 > 1;
console.log(comp3); // true

comp3 = 2 >= 1;
console.log(comp3); // true
