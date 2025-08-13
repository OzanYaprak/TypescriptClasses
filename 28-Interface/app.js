function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Ozan",
    lastName: "Yaprak"
};
console.log(getFullName(person));
