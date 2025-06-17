/*
비동기 작업 처리하기 - 2. Promise

ㅇPromise란?
비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체.
비동기 작업을 실행하는 함수(ex: setTimeout)를 감싸는 객체이다.
비동기 작업에 필요한 거의 모든 기능을 가지고 있다.

ㅇPromise의 기능
비동기 작업 실행
비동기 작업 상태 관리
비동기 작업 결과 저장
비동기 작업 병렬 실행
비동기 작업 다시 실행
기타 등등

ㅇPrimise 객체의 3가지 상태
대기(Pending) > 성공(Fulfilled)
              > 실패(Rejected)

대기(Pending): 아직 비동기 작업이 완료되지 않은 상태. 
성공(Fulfilled): 비동기 작업이 성공적으로 마무리 된 상태.
실패(Rejected): 비동기 작업이 실패한 상태.


대기 > 성공 상태로 바뀌는걸 "해결(또는 resolve)"되었다고 한다.
대기 > 실패 상태로 바뀌는걸 "거부(또는 reject)"되었다고 한다.

ex: 유튜브에서 동영상 로딩 중(대기), 동영상 로드 완료하여 시청 가능 상태(성공), 영상 로드 실패(실패)
*/

// 대기 상태의 프로미스 객체 확인
const promise = new Promise(() => {
  // 비동기 작업 실행하는 콜백 함수 "executor"

  setTimeout(() => {
    console.log("안녕");
  }, 2000);
});

console.log(promise); //.... Object[[PromiseState]]: "pending"[[PromiseResult]]: undefined

// 성공 상태의 프로미스 객체 확인
const promise2 = new Promise((resolve, reject) => {
  // resolve: Promise의 작업 결과를 성공 상태로 바꿈.
  // reject: ... 실패 상태로 바꿈.
  // resolve에 인수를 전달하면 이것이 PromiseResult의 값이 됨.
  // 비동기 작업 실행하는 콜백 함수 "executor"

  setTimeout(() => {
    console.log("안녕");
    resolve("결과 값"); // Promise 객체의 상태를 "성공(Fulfilled)"상태로 바꿈.
  }, 2000);
});

setTimeout(() => {
  console.log(promise); // [[PromiseState]]: "pending" [[PromiseResult]]: undefined
  console.log(promise2); // [[PromiseState]]: "fulfilled" [[PromiseResult]]: "결과 값"
}, 3000);

// 실패 상태의 프로미스 객체 확인
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("실패!");
    //reject("실패한 이유?!"); // Uncaught (in promise) 실패한 이유?!
  }, 4000);
});

setTimeout(() => {
  console.log(promise3); // [[PromiseState]]: "rejected"  [[PromiseResult]]: "실패한 이유?!"
}, 4500);

// Promise 활용(then 메서드)
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다.");
    }
  }, 5000);
});

// then 메서드
// promise가 성공으로 끝났을때에만 실행된다.
promise4.then((result) => {
  console.log(result); // 20
});

// catch 메서드
// promise가 실패했을때 실행된다.
promise4.catch((error) => {
  console.log(error); // num이 숫자가 아닙니다.
});

// then 메서드는 성공의 결과값 뿐만 아니라 promise 객체 자체를 다시한번 반환한다.
// 그래서 catch를 따로 사용하지 않고 then 뒤에 그대로 붙여서 활용할 수 있다.
// 이렇게 then과 catch를 연달아 사용하는 방법을 "promise chaining"이라고 한다.
promise4
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 프로미스를 활용해서 콜백지옥을 벗어나는 방법 - then 메서드의 콜백함수 안에서 return 사용하기.
function add10(num) {
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        "------------------------------------정리------------------------------------"
      );

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 5500);
  });

  return promise5;
}

const res = add10(10);

res
  .then((result) => {
    console.log(result); // 20

    const res2 = add10(result);
    return res2; // res2의 결과값을 return을 통해 반환할수 있고 then 메소드로 이 값을 다시 받을 수 있다.
  })
  .then((result2) => {
    console.log(result2); // 30
    return add10(result2);
  })
  .then((result3) => {
    console.log(result3); // 40
  });
