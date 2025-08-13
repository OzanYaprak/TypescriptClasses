abstract class Department {
    constructor(public name: string) { }

    abstract printMeeting(): void;

    printName(): void {
        console.log("Department name:" + " " + this.name)
    }
}

class AccountingDepartment extends Department {

    constructor() {
        super("Accounting And Auditing");
    }

    printMeeting(): void {
        console.log("Method not completed.");
    }

    generateReports(): void {
        console.log("Generating accounting reports..")
    }
}

let department = new AccountingDepartment();

department.printName();
department.printMeeting();
department.generateReports();