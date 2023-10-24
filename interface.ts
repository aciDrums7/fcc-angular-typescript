//! Interfaces don't exist on JS, so if you're creating a backend app, instead USE CLASSES!

export interface User {
    id: number
    name: string
    age?: number
    email: string
}

// let user: User = { name: 'John', id: 1, email: '' }

//? Object destructoring
let { name: userName, email: userLogin }: User = {
    name: 'John',
    id: 1,
    email: '',
}

console.log(userLogin)

interface WorkEmployee extends User {
    salary: number
}

let worker: WorkEmployee = { name: 'John', id: 1, email: '', salary: 1000 }

export interface Login {
    login(): User
}

/* let userList: User[] = [
    {
        name: 'John',
        id: 1,
        email: '',
    },
    {
        name: 'Miiii',
        id: 2,
        email: '',
    },
    {
        name: 'Johnny',
        id: 3,
        email: '',
    },
] */

//? Array destructoring
let [user1, user2, ...restUsers]: User[] = [
    {
        name: 'John',
        id: 1,
        email: '',
    },
    {
        name: 'Miiii',
        id: 2,
        email: '',
    },
    {
        name: 'Johnny',
        id: 3,
        email: '',
    },
]

console.log(user1)
console.log(user2)
console.log(restUsers)
