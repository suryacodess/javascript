console.log("date-");

// console.log(date); //retuns date
// console.log("day -", date.getDate()); //retuns day
// console.log(date.getDay());
// console.log(date.toDateString()); // retuns date in string
// console.log(date.toLocaleTimeString()); // retuns time in string

// setInterval(() => {
//   console.log(date.toLocaleTimeString());
// }, 1);

setInterval(() => {
  let date = new Date();
  let time = date.toLocaleTimeString();
  let h1 = document.querySelector("h1");
  h1.textContent = time;
}, 1000);

// current date
const main = document.querySelector("main");
let date = new Date();
let currentDate = date.toLocaleDateString();
const h2 = document.createElement("h2");
h2.textContent = currentDate;
main.append(h2);

//////// digital clock /////////
let seconds = date.getSeconds();
let minutes = date.getMinutes();
let hours = date.getHours();

setInterval(() => {
  let clock = `${hours} : ${minutes} : ${seconds}`;
  const h2 = document.querySelector("h2");
  h2.innerText = clock;
}, 1000);
