/*
비동기 작업 처리하기 - 3. async/await

async
어떤 함수를 비동기 함수로 만들어주는 키워드
함수가 프로미스를 반환하도록 변환해주는 키워드

await
async 함수 내부에서만 사용이 가능한 키워드
비동기 함수가 다 처리되기를 기다리는 역할
*/

// async
async function getData() {
  return {
    name: "김성원",
    id: "이또롱",
  };
}

// console.log(getData()); // [[Prototype]]: Promise  [[PromiseState]]: "fulfilled"  [[PromiseResult]]: Object

// await
async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "김성원",
        id: "이또롱",
      });
    }, 1500);
  });
}

async function printData() {
  //await 없이 일반적으로 프로미스 객체 결과값을 참조할시
  getData2().then((value) => {
    console.log(value); // {name: '김성원', id: '이또롱'}
  });

  const data = await getData2();
  console.log(data); // {name: '김성원', id: '이또롱'}
}

printData();
