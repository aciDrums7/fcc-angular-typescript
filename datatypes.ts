//1 STRING
let lname: string = 'John'

// lname = 10;

lname = 'Satosh'

let newName = lname.toUpperCase()

console.log(newName)

//2 NUMBER

let age: number = 20

// age = '25';

age = 25.5

let dob = '25'

let result1 = parseInt(dob)

//3 BOOLEAN

let isValid: boolean = false

console.log(isValid)

//4 ARRAY

let empList: string[]

empList = ['Santosh', 'Amir', 'Sanjay']

let numList: Array<number>

numList = [1, 2, 3, 4, 5, 6, 7]

let results = numList.filter((num) => num > 2)

let num = results.find((num) => num === 2)

let sum = results.reduce((acc, num) => acc + num)

console.log(results)
console.log(num)

//5 ENUM

enum Color {
    RED,
    GREEN,
    BLUE,
}

let c: Color = Color.BLUE

//6 TUPLES

let swapNumbs: [firstNumber: number, secondNumber: number]

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1]
}

swapNumbs = swapNumbers(10, 20)

console.log(swapNumbs)

console.log(swapNumbs[0])

console.log(swapNumbs[1])

//7 ANY

let department: any

department = 'IT'
department = 10
