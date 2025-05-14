/* 함수 */

// 간단한 함수
function greeting(name) {
  console.log(`안녕하세요! ${name}입니다!`);
}

greeting("김성원");

// 직사각형의 너비를 구하는 함수
function getArea(x, y) {
  let area = x * y;
  return area; // return: 값을 반환하고 함수 종료
}

let res = getArea(10, 10);
console.log(`직사각형의 너비는 ${res}입니다`);

// 함수를 호출할때 쓰는 값은 "인수" ex) 10, 20
// 인수를 받는 함수 측에서는 "매개변수" ex) x, y

// 호이스팅(뜻: 끌어올리다)
// 함수보다 앞서서(윗 줄에서) 함수를 호출해도 에러 없이 함수가 호출된다
// 다른 언어에는 없는 자바스크립트의 특징
getFunc();

function getFunc() {
  console.log("실행되지롱");
}
