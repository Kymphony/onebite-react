/*
객체 2
*/

// 1. 상수 객체 - 상수에 저장하는 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수에 저장한 객체이기 때문에 객체를 재정의 하는것은 불가능
//animal = { habitat: "집고양이" }; // Uncaught TypeError: Assignment to constant variable.

// 그러나 객체에 프로퍼티를 추가하거나 수정/삭제하는것은 가능하다.
animal.type = "강아지";
animal.name = "누렁이";
animal.habitat = "내집";
delete animal.color;

console.log(animal);

// 2. 메서드
// 객체 프로퍼티 중 값이 함수인 프로퍼티

const person = {
  name: "김성원",
  // 메서드
  sayHi: function () {
    console.log("Hello World!");
  },
  sayBye: () => {
    console.log("Good bye!");
  },
  // 메서드 선언 표기법
  sayMyName() {
    console.log("my name is SON");
  },
};

person.sayHi(); // Hello World!
person.sayBye(); // Good bye!
person.sayMyName(); // my name is SON
person["sayMyName"](); // my name is SON
