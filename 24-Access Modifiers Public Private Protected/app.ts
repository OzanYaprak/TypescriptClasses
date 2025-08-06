class Person {
    id: number;
    name: string;
    // Public modifier allows access from anywhere
    public age: number;
    // Private modifier restricts access to within the class
    private address: string;
    // Protected modifier allows access in the class and subclasses
    protected phoneNumber: string;

    constructor(id: number, name: string, age: number, address: string, phoneNumber: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }

}