type Person = {
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
}

let instructor: Person;

instructor = {
    firstName: 'Ozan',
    lastName: 'Erhan',
    age: 33,
    jobTitle: 'Software Developer'
}

console.log(instructor.age);