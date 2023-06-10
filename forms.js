console.log("forms-");

let form = document.querySelector(".form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = username.value;
  let passWord = password.value;
  console.log(userName.length, passWord.length);
  console.log("submited!");

  if (userName.length < 5 && password.length < 5) {
    alert("username and password length is short!");
  }
  if (passWord.includes("@") === false) {
    alert("password is weak, please user characters like - @");
  } else {
    alert(`thankyou for submiting, your username is ${userName}`);
  }
});
