console.log("dom-");

// console.log(document);
// document.body.innerHTML = "surya prakash";
// document.body.style.background = "red";

// chess board bg change
// let main = document.getElementById("main");
// for (let i = 1; i <= 9; i++) {
//   const div = document.createElement("div");
//   div.setAttribute("class", "box");
//   main.appendChild(div);
// }

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     boxes.forEach((box) => {
//       box.style.backgroundColor = "white";
//     });
//     box.style.backgroundColor = "red";
//   });
// });

// queryselector
// let p = document.querySelector("p");
// console.log(p);
// console.log(p.innerHTML); //returns text in the p element
// console.log(p.innerText); //returns text in the p element
// console.log(p.textContent); //returns text in the p element

// querySelectorAll
// let p = document.querySelectorAll("p"); //returns collections of the matching element
// console.log(p);

// p.forEach((p) => {
//   console.log(p.textContent);
// });

// bg change on clicking button
// const changeBg = document.getElementById("btn");
// changeBg.addEventListener("click", () => {
//   console.log("hey");
//   document.body.style.backgroundColor = "red";
//   document.body.style.color = "white";
// });

// const p = document.querySelectorAll("p");
// p.forEach((x) => {
//   x.setAttribute("class", "para"); // set attributes
//   x.setAttribute("id", "para"); // set attributes

//   console.log(x.getAttribute("class"), x.getAttribute("id")); //return attributes

//   x.classList.add("new"); //add class
//   x.classList.replace("para", "replace");
//   console.log(x.className); //returns classes
// });

// let pp = document.querySelector("p");
// console.log(pp.classList.remove("new")); // remove class
// console.log(pp.classList.replace("para", "replace")); //replace class with new class

// children elements of parent element
// const main = document.querySelector("#main");
// console.log(main.children); //returns children elements
// let child = main.children;
// for (let index = 0; index < child.length; index++) {
//     const element = child[index];
//     console.log(element.innerHTML = "h2") ;
// }

//returns sibling element
// const p = document.querySelector("p");
// console.log(p.nextElementSibling); // returns next sibling element
// console.log(p.previousElementSibling); // returns previous sibling element
// console.log(p.parentElement); // returns parent element

// let div = document.querySelector("div");
// console.log(div.parentElement) //returns parent element

//todo list js
// let input = document.querySelector("#todoInput");
// const todoList = document.querySelector(".todo-list");
// const addbtn = document.querySelector(".addBtn");

// addbtn.addEventListener("click", () => {
//   const todoVal = input.value;
//   if (todoVal.length < 5) {
//     alert("enter proper todo!!!");
//   } else {
//     const li = document.createElement("li");
//     li.textContent = todoVal;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.setAttribute("onclick", "deletebtn()");
//     deleteBtn.setAttribute("class", "delBtn");
//     deleteBtn.textContent = "delete todo";

//     li.appendChild(deleteBtn);
//     todoList.appendChild(li);

//     input.value = " ";
//   }
// });

// add Event Listener

const li = document.querySelectorAll("li");
li.forEach((li) => {
  li.addEventListener("click", (e) => {
    li.style.textDecoration = "line-through";
    e.target.style.color = "Red";
    e.target.remove();
  });
});

//////////////////////////////////////////////////////////////

// - querySelector
// - querySelectorAll
// - parentElement
// - children
// - nextSiblingElement
// - previousSiblingElement
// - setAttribute
// - getAttribute
// - classList.add
// - classList.remove
// - classList.replace
// - classList.toggle
// - innerText
// - innerHTML
// - textContext
