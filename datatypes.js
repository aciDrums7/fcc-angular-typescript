"use strict";
//1 STRING
let lname = 'John';
// lname = 10;
lname = 'Satosh';
let newName = lname.toUpperCase();
console.log(newName);
//2 NUMBER
let age = 20;
// age = '25';
age = 25.5;
let dob = '25';
let result1 = parseInt(dob);
//3 BOOLEAN
let isValid = false;
console.log(isValid);
//4 ARRAY
let empList;
empList = ['Santosh', 'Amir', 'Sanjay'];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7];
let results = numList.filter((num) => num > 2);
let num = results.find((num) => num === 2);
let sum = results.reduce((acc, num) => acc + num);
console.log(results);
console.log(num);
//5 ENUM
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let c = Color.BLUE;
//6 TUPLES
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
console.log(swapNumbs[0]);
console.log(swapNumbs[1]);
//7 ANY
let department;
department = 'IT';
department = 10;
