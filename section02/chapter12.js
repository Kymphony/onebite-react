/*
비동기 작업 처리하기 - 1. 콜백 함수
*/

// 콜백 함수 연습 1
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 1000);
}

add(1, 2, (value) => {
  console.log(value);
});

// add 함수에 인수 1,2를 전달하며 실행한다.
// add 함수 내부의 setTimeout 함수를 WEB APIs에 등록한다.
// 3초가 지나면 WEB APIs가 콜백함수를 리턴하여 JS가 콜백함수를 실행한다.
// sum을 계산하고 callback함수에 매개변수를 전달하며 실행한다.
// callback함수(value)=>{} 가 실행되며 콘솔이 출력된다.

// add 실행 > 비동기 함수 실행 > 비동기 함수 내 처리 실행 > 콜백함수 실행 > 콘솔 출력

// 콜백 함수 연습 2 - 음식을 주문하는 상황
function orderFood(food, callback) {
  setTimeout(() => {
    let price;
    let time;
    switch (food) {
      case "떡볶이":
        (price = 5000), (time = "10분");
        break;
      case "치킨":
        (price = 23000), (time = "30분");
        break;
      case "피자":
        (price = 20000), (time = "20분");
        break;
      default:
        break;
    }
    callback(food, price, time);
  }, 2000);
}

function getDeliveryService(time, callback) {
  setTimeout(() => {
    let index = time.indexOf("분");
    let minutes = parseInt(time.substring(0, index));
    let deliveryTime = minutes + 20;

    callback(deliveryTime);
  }, 2000);
}

function getArriveMsg(food, deliveryTime, callback) {
  setTimeout(() => {
    let msg = `기다리신 ${food}, 지금 문앞에 도착했습니다! 맛있게 드세요!`;
    callback(msg);
  }, deliveryTime * 100);
}

orderFood("치킨", (food, price, time) => {
  if (price && time) {
    console.log(`${food}의 가격은 ${price}원이고 조리 시간은 ${time}입니다.`); // 치킨의 가격은 23000원이고 조리 시간은 30분입니다.

    getDeliveryService(time, (deliveryTime) => {
      let currTime = new Date();
      let currMin = currTime.getMinutes();
      currTime.setMinutes(currMin + deliveryTime);
      console.log("음식이 " + currTime.toLocaleString() + "에 도착예정입니다."); // 음식이 2025. 6. 16. 오후 6:06:08에 도착예정입니다.

      getArriveMsg(food, deliveryTime, (msg) => {
        console.log(msg); // 기다리신 치킨, 지금 문앞에 도착했습니다! 맛있게 드세요!
      });
    });
  } else {
    console.log("판매하지 않는 상품입니다.");
  }
});

// 코드에서 콜백 함수가 반복될수록 인덴트(들여쓰기)가 점점 깊어지고 코드 가독성은 점점 낮아진다.
// 이러한 문제를 JS 프로그래머들은 "콜백 지옥"이라고 부른다.
// 콜백 지옥을 피하기 위해 "프라미스"라는 비동기 작업을 도와주는 객체를 사용한다.
