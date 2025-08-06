var Person = /** @class */ (function () {
    function Person(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
console.log(new Person(1, 'John', 'Doe'));
console.log(new Person(2, 'Jane', 'Smith').getFullName());
var person = new Person(3, 'Alice', 'Johnson');
console.log(person.getFullName());
