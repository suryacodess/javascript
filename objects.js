console.log("objects - ");

// let obj = {}; //creating an empty object

// console.log(obj);

//adding properties to the object
// obj.firstName = "surya";
// obj.secondName = "prakash";
// obj.lastName = "srigada";
// console.log(obj);

// delete obj.firstName // deleting a property in an object
// console.log( obj);

//array of an objects
// let obj = [
//   { firstName: "surya", secondName: "prakash", lastName: "srigada" },
//   { firstName: "sampath", secondName: null, lastName: "srigada" },
// ];

// console.log(obj[0].firstName);
// console.log(obj[1].firstName);

// looping through array of an objects
// for (let i = 0; i < obj.length; i++) {
//   console.log(obj[i].firstName, obj[i].secondName, obj[i].lastName);
// }

// traversing an array of objects using map function
// obj.map((elem) => console.log(elem.firstName, elem.secondName, elem.lastName));

// let k = obj.keys();

// for(let i=0; i<obj.length;i++){
//     let val = k.next();
//     console.log(val.value);
// }

// methods inside the functions
// let name = {
//   firstName: "surya",
//   secondName: "prakash",
//   fullname: function () {
//     return console.log(`my full name is ${this.firstName}, ${this.secondName}`);
//   },
// };
// console.log(name.fullname());
// let show = {
//   log: function (name) {
//     console.log(name);
//   },
// };
// show.log("name");



// SETs in Javascript
//creating a set data structure
// let name = new Set(["surya", "prakash", "srigada"]);
// console.log(name);

// let names = new Set([]);
// names.add("surya prakash");
// names.add("srigada");
// names.add("frontend developer");
// console.log(names);

// traverse through the set
// names.forEach(x=>console.log(x));

// deletes an element in the set
// names.delete("surya prakash");

// console.log(names.size); // return the size of the set



//MAPs in javascript
// let map = new Map();
// console.log(map);

// In maps value can be same but key cant be the same as other keys
// In maps duplicate keys are not allowed
// map.set("firstName","surya ");
// map.set("secondName","prakash");
// map.set("lastName","srigada");
// map.set("lastName","surya");

// console.log(map);

// map.delete("firstName"); //deletes a value on the basis of key

// console.log(map);

// console.log(map.size); //returns size of the map ds 

// console.log(map.get("firstName"));// returns the value of the key

//traverse the map
// map.forEach(x=>console.log(x));

// let k = map.keys(); //returns key 
// let v = map.values(); //returns value
// console.log(k);
// console.log(v);