console.log("local storage-");

localStorage.setItem("name", "surya");
localStorage.setItem("secondName", "prakash"); // adding items in local storage
console.log(localStorage);
console.log(localStorage.getItem("secondName")); // geting items by key
console.log(localStorage.length);
localStorage.setItem("secondName", "srigada"); // updating the value
console.log(localStorage);
localStorage.removeItem("secondName"); // removing item in local storage
console.log(localStorage);

let names = [
  { firstName: "surya", lastName: "srigada" },
  { firstName: "prakash", lastName: "srigada" },
];

let stringNames = JSON.stringify(names);

localStorage.setItem("names", stringNames);
console.log(localStorage);
console.log(localStorage.getItem("names"));