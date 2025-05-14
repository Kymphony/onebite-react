/* 

조건문

자바스크립트에는 대표적으로 if, switch 있음

*/

// Switch문
// if문과 기능 자체는 동일
// 다수의 조건을 처리할때 if보다 더 직관적이다.

let animal = "owl";

switch (animal) {
  case "cat":
    console.log("고양이");
    break;
  case "dog":
    console.log("강아지");
    break;
  case "bear":
    console.log("곰");
    break;
  case "tiger":
    console.log("호랑이");
    break;
  default:
    console.log("동물이 아님");
}
