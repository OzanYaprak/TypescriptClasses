var _employee = {
    personName: "Ozan",
    personSurname: "Yaprak",
    personNumber: 21
};
console.log(_employee);
// Class'a interface implement etme (Pek önerilen kullanım değil)
var WorkerClass = /** @class */ (function () {
    function WorkerClass(personName, personSurname, personPhone) {
        this.personName = personName;
        this.personSurname = personSurname;
        this.personPhone = personPhone;
    }
    return WorkerClass;
}());
var _worker = new WorkerClass("Ozan", "Yaprak", 21);
console.log(_worker);
