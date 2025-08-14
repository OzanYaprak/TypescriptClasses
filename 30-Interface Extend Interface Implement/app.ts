interface IPerson {
    personName: string,
    personSurname: string
}

interface IEmployee extends IPerson {
    personNumber: number
}

let _employee: IEmployee = {
    personName: `Ozan`,
    personSurname: `Yaprak`,
    personNumber: 21
}

console.log(_employee)

// Class'a interface implement etme (Pek önerilen kullanım değil)

class WorkerClass implements IPerson {
    personName: string;
    personSurname: string;
    personPhone: number;

    constructor(personName: string, personSurname: string, personPhone: number) {
        this.personName = personName;
        this.personSurname = personSurname;
        this.personPhone = personPhone;
    }
}

let _worker = new WorkerClass("Ozan", "Yaprak", 21);

console.log(_worker);