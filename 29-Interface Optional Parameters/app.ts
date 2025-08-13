interface IPerson {
    readonly firstName: string,
    readonly lastName: string,
    readonly middleName?: string
}

function getFullName(person: IPerson) {

    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}

let person: IPerson = {
    firstName: "Ozan",
    lastName: "Yaprak",
    // middleName: "Erhan"
}

console.log(getFullName(person));


interface IStringFormat {
    (stringValue: string, isUpper: boolean): string
}

let formatValue: IStringFormat;
formatValue = function (stringValue: string, isUpper: boolean) {
    return isUpper ? stringValue.toLocaleUpperCase() : stringValue.toLocaleLowerCase();
}

console.log(formatValue("Ozan Yaprak", true))