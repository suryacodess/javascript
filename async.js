console.log("async-");

console.log(1);
console.log(2);
const fetchJson = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((response) => console.log(response));
};

setTimeout(fetchJson);
console.log(3);
console.log(4);
