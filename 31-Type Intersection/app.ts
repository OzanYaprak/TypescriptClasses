interface IBusinessPartner {
    name: string;
    credit: number;
}

interface IIdentity {
    name: string;
    id: number;
}

interface IContact {
    email: string;
    phone: string;
}

type Employee = IIdentity & IContact & IBusinessPartner;

let kisim: Employee = {
    id: 1,
    email: "oznyprk@gmail.com",
    name: "Ozan",
    phone: "11111",
    credit: 123
}

console.log(kisim);