/* 자바스크립트의 형 변환(Type Casting) */

// 1. 묵시적 형 변환(암묵적 형 변환)
// 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 알아서 형 변환 하는 것
let num = 10;
let str = "20";
const result = num + str;
console.log(result); // 1020
// 덧셈을 하는 과정에서 num을 문자열로 형변환

// 2. 명시적 형 변환
// 개발자가 직접 함수 등을 이용해 형 변환을 일으킴

// 2-1) 문자열 > 숫자로 형 변환: Number()
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); // 20

// 숫자+문자 형태의 변수를 형변환 하기: parseInt()
let str2 = "10개";
let strToNum2 = Number(str2);
console.log(strToNum2); // NaN

strToNum2 = parseInt(str2);
console.log(strToNum2); // 10

// 2-2) 숫자 > 문자열로 형 변환: String()
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다");
