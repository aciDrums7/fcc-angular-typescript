import { Login, User } from './interface'

// import * as UserLogin from './interface'

interface Address {
    street: string
    city: string
    state: string
    pin: string
}

class Employee implements Login {
    #id: number
    protected name: string
    address: Address

    constructor(id: number, name: string, address: Address) {
        this.#id = id
        this.name = name
        this.address = address
    }

    login(): User {
        return { name: 'John', id: 1, email: '' }
    }

    get id() {
        return this.#id
    }

    set id(setId: number) {
        this.#id = setId
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address.street}`
    }

    static getEmployeeCount(): number {
        return 21
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address)
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`
    }
}

let john = new Employee(1, 'John', {
    street: 'ABXC',
    city: 'Bangalore',
    state: 'Karnataka',
    pin: '12345',
})
console.log(john.id)
john.id = 343
console.log(john.id)

// john.id = 1
// john.name = 'John'
// john.address = 'Highway 71'

console.log(john)
console.log(john.getNameWithAddress())
console.log(Manager.getEmployeeCount())
