console.log("oops-");

//oops is known as object oriented programming language, which uses objects to create
//oops contain four main pillars -
//- encapsulation
//- inheritance
//- abstraction
//- polymorphism

// objects are created with new keyword

let obj = new Object();
console.log(obj);
console.log(typeof obj);

let Car = function (color, model) {
  this.color = color;
  this.model = model;
};

let car = new Car("black", "2023");
console.log(car);


Car.prototype.company = "bmw";
console.log(car);

let arr = [1,2,4];
console.log(arr.__proto__);