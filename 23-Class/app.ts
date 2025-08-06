
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
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(new Person(1, 'John', 'Doe'));
console.log(new Person(2, 'Jane', 'Smith').getFullName());

let person = new Person(3, 'Alice', 'Johnson');
console.log(person.getFullName());