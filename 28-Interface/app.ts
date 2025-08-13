interface IPerson {
    firstName?: string,
    lastName?: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName: "Ozan",
    lastName: "Yaprak"
}

console.log(getFullName(person));