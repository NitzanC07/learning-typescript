"use strict";
let age = 9;
let myName = "Nitzan";
const circle = (diameter) => {
    return diameter * Math.PI;
};
myName = "Rony";
console.log(circle(13));
// ARRAIES
let names = ["Nitzan", "Karin", "Rony"];
// names = "Nitzan" // names is type of array, so it doesn't possible to replace it with a string.
// names.push(3); // names is type of array, so it doesn't possible to push a number.
names.push("Gal");
// OBJECTS
let person = {
    name: "Nitzan",
    age: 36
};
person.name = "Rony";
person.age = 35;
// person.age = "Thirty five" // The type of the value inside person.age is number, so it doesn't possible to replace it with a string.
// person.skills = ["Math", "Running", "Climbing"] // skills doesn't contain in the original object.
person = {
    name: "Gal",
    age: 36,
    // skills: ["Design", "Management"]
};
// EXPLICIT TYPES
// Here I can define a variable and his type, without assign a value to it.
let bookName;
let pages;
let isAvailable;
// bookName = 30; // It doesn't possible, because the value needs to be as a string type.
bookName = "Harry Potter";
// pages = "Two hundreds fifty"; // it doesn't possible, because thevalue needs to be as a number type.
pages = 250;
// isAvailable = "true";
isAvailable = true;
let books = [];
// books = "Harry Potter"; // books is an array type, not a string type.
books.push("Harry Potter");
// UNION TYPES
let mixed = [];
mixed.push("Nitzan");
mixed.push(22);
// mixed.push(false);
let uid;
uid = 12;
uid = "ABC";
// uid = true;
// OBJECTS
let personOne;
personOne = {
    name: "Karin",
    age: 35,
}; // It is possible, because {} is an object.
personOne = []; // it is possible too, because [] is also an object.
let personTwo;
personTwo = {
    name: "Omer",
    age: 36,
    // hairColor: "Black" // This isn't appropriate to the personTwo definition.
};
console.log(personTwo);
