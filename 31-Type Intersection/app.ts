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

type Employee = IIdentity & IContact;