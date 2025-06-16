/*
Date 객체와 날짜
*/

// 1. Date 객체를 생성하는 방법
// 생성자를 사용하여 매개변수 없이 생성 - 현재 시간 표시
let date1 = new Date();
console.log(date1); // Mon Jun 16 2025 10:57:54 GMT+0900 (한국 표준시)

// 날짜 설정
let date2 = new Date("1990-04-13");
console.log(date2); // Fri Apr 13 1990 09:00:00 GMT+0900 (한국 표준시)

// 시간 설정
let date3 = new Date("1990-4-13/10:10:10");
console.log(date3); // Fri Apr 13 1990 10:10:10 GMT+0900 (한국 표준시)

// 2. 타임스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로부터 몇 ms가 지났는지를 의미하는 숫자값
// 타임스탬프의 기준이 되는 "1970.01.01 00시 00분"을 "세계 협정시"라고 하며 줄여서 "UTC"라고 한다.
let ts1 = date1.getTime();
console.log(ts1); // 1750039533493

let date4 = new Date(ts1); // Date 생성자에 타임스탬프값을 인수로 전달하면 타임스탬프에 해당하는 시간으로 Date 객체가 생성
console.log(date4); // Mon Jun 16 2025 11:06:50 GMT+0900 (한국 표준시)
console.log(date1, date4); // Mon Jun 16 2025 11:08:10 GMT+0900 (한국 표준시) Mon Jun 16 2025 11:08:10 GMT+0900 (한국 표준시)

// 3. 시간 요소들을 추출하는 방법
// 자바스크립트에서 "월"은 마치 배열 인덱스처럼 0부터 시작하기 때문에 헷갈리지 않도록 +1 을 해주는 경우가 많다.
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minutes, seconds); // 2025 6 16 11 17 59

// 4. 시간 수정하기
date1.setFullYear(2025);
date1.setMonth(7);
date1.setDate(16);
date1.setHours(11);
date1.setMinutes(20);
date1.setSeconds(30);

console.log(date1); // Sat Aug 16 2025 11:20:30 GMT+0900 (한국 표준시)

// 5. 시간을 여러 포맷으로 출력하기
// 시분초 제거하고 날짜와 시간만 나오게
let date5 = new Date();
console.log(date5.toDateString()); // Mon Jun 16 2025
// 현지에서 표시하는 시간 형식으로 바꾸기
console.log(date5.toLocaleString()); // 2025. 6. 16. 오전 11:22:45
