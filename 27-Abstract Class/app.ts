abstract class Department {
    constructor(public name: string) { }
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting And Auditing");
    }
}