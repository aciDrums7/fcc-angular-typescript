"use strict";
//1 Name Function
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(3, 7));
console.log(add(3, 7, 1));
//2 Arrow Function
const sub = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(sub(7, 3));
console.log(sub(7, 3, 5));
//3 Function Expression
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(7, 3));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(add2(2, 3, ...numbers));
function getItems(items) {
    return new Array().concat(items);
}
let concatResult = getItems([1, 2, 3, 4, 5]);
console.log(concatResult);
let concatString = getItems(['b', 'e', 'l', 'l', 'a']);
console.log(concatString);
