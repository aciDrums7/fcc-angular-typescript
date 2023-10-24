//1 Name Function
function add(num1: number, num2: number, num3?: number) {
    return num3 ? num1 + num2 + num3 : num1 + num2
}

console.log(add(3, 7))

console.log(add(3, 7, 1))

//2 Arrow Function
const sub = (num1: number, num2: number, num3 = 10): number =>
    num1 - num2 - num3

console.log(sub(7, 3))

console.log(sub(7, 3, 5))

//3 Function Expression
const mult = function (num1: number, num2: number): number {
    return num1 * num2
}

console.log(mult(7, 3))

function add2(num1: number, num2: number, ...num3: number[]): number {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}

const numbers = [1, 2, 3, 4, 5]

console.log(add2(2, 3, ...numbers))
