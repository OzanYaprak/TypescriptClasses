function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "Ozan",
    lastName: "Yaprak",
    // middleName: "Erhan"
};
console.log(getFullName(person));
var formatValue;
formatValue = function (stringValue, isUpper) {
    return isUpper ? stringValue.toLocaleUpperCase() : stringValue.toLocaleLowerCase();
};
console.log(formatValue("Ozan Yaprak", true));
