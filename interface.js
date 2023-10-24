"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let user: User = { name: 'John', id: 1, email: '' }
//? Object destructoring
let { name: userName, email: userLogin } = {
    name: 'John',
    id: 1,
    email: '',
};
console.log(userLogin);
let worker = { name: 'John', id: 1, email: '', salary: 1000 };
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
let [user1, user2, ...restUsers] = [
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
];
console.log(user1);
console.log(user2);
console.log(restUsers);
