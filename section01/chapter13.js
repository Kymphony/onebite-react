/* 
콜백 함수
- 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함
*/

function main(value) {
  value(); // sub
}

function sub() {
  console.log("sub");
}

main(sub);

// main()이라는 다른 함수에 인수로써 전달된 sub()는 콜백함수

// 1. 콜백함수
// 지금까지의 함수
function exm(value) {
  console.log(value);
}

exm(1); // 1

// 콜백함수
function exm2() {
  console.log("i am exm2");
}

exm(exm2);
/*
ƒ exm2() {
  console.log("i am exm2");
}
 */

exm(function exm2() {
  console.log("i am exm3");
});

exm(function () {
  console.log("i am exm4");
});

exm(() => {
  console.log("i am exm5");
});

// 2. 콜백 함수의 활용
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

function repeatTriple(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 3);
  }
}

repeat(5);
repeatDouble(5);
repeatTriple(5);

// 위와 같이 처리 내용이 비슷한 중복코드를 방지하고 코드를 개선하기 위함
function repeatCb(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatCb(5, function (idx) {
  console.log(idx * 2);
});

repeatCb(5, function (idx) {
  console.log(idx * 3);
});
