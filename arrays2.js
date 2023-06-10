console.log("arrays 2");

let a = [1, 2, 3, 4, 5, 6, 7, 8];

// a.reverse(); //mutating method - which alter original array
// console.log(a);

let b = ["surya", "prakash"];

// let c = a+b;
// console.log(a.concat(b)); // not a mutating method - store two different arrays in one array

// console.log([...a,...b]); //spread operator - es6

let c = [...a, ...b];

// console.log(c.join(" ")) // not a mutating method - changes data type to string
// console.log(c.join(","))
// console.log(c.join("-"))

// console.log(c);
// console.log(c.slice(0,5)); // not a mutating method - returns a copy of array with new elements

// console.log("original array", c);
// c.splice(0,5,"surya prakash"); //mutating method - which deletes an element in an array by index
// console.log("after splice",c); //number and index value and adds new element to the index.

// console.log(a.at(-1)); // returns element on the basis of index

//Higher Order Functions
// - map
// - filter
// - reduce
// - find
// - findIndex
// - some and every
// - flat
// - sort

// map - creates new array from the original array by applying transformation function
// let map = c.map(x=> x+1); // not a mutated function
// console.log(c);
// console.log(map);

// filter - filter the array and returns copy of an array
// let filter = c.filter((x) => x !== "surya");
// console.log(filter);

// reduce

// find - returns the first element we are looking for (used for complex arrays like objs in arrays)
// let d = [
//   { id: 1, name: "surya", secondName: "prakash" },
//   { id: 2, name: "swaroopa", secondName: "srigada" },
//   { id: 3, name: "sampath", secondName: "srigada" },
//   { id: 4, name: "ashok", secondName: "srigada" },
// ];
// let find = d.find((d) => {
//   return d.id === 1; 
// });
// console.log(find);

// findIndex - returns the index of an element if condition becomes true or else it will return 0.
// let findIndex = a.findIndex((x) => x !== 3);
// console.log(findIndex);

// some and every
// some - if any condition becomes true it will return true or false
// let some = a.some(x=>x>3);
// console.log(some);

// every - to return true, all conditions must be true, vice versa
// let every = a.every(x=>x>1);
// console.log(every);

// flat - it creates a new array with the elements of subarray
// let flatarr = [1,2,3,[1,2,3]];
// console.log(flatarr.flat());

// sort 
// let arr = ["a","c","b","z","d"];
// console.log(arr.sort());
// console.log(arr.sort().reverse());
// let num = [11,4,2,323,767,23];
// console.log(num.sort((a,b)=>a-b));
