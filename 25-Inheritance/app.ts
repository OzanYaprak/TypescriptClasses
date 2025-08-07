class Person {
    id: number;
    firstName: string;
    lastName: string;

    constructor(id: number, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName); // Miras aldığı constructoru super ile tetikler
    }
}


const employee = new Employee(1, 'John', 'Doe');
console.log(employee.getFullName()); // John Doe