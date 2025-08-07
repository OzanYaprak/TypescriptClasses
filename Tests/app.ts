// class Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// let people: Person[] = [
//     { firstName: `Ozan`, lastName: `Yaprak`, age: 33 },
//     { firstName: `Erhan`, lastName: `Yaprak`, age: 23 }
// ]

// people.forEach(element => {
//     console.log(`${element.firstName} ${element.lastName} - ${element.age} yaşında`);
// });



//#region Küçük Bir “Adres Defteri”



class Contact {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}

let contactList: Contact[] = []; // Boş Liste

let contact_1: Contact = { firstName: "Ozan", lastName: "Yaprak", phone: "5392129984", email: "oznyprk@gmail.com" }
let contact_2: Contact = { firstName: "Erhan", lastName: "Yaprak", phone: "999999999", email: "erhanyaprak@gmail.com" }

function AddContact(contact: Contact) {
    contactList.push(contact);
}

function ContactList() {
    contactList.forEach(x => {
        console.log(`${x.firstName} - ${x.lastName} - ${x.phone} - ${x.email}`);
    });
}

function RemoveContact(email: string): boolean {
    let initialLength = contactList.length;
    contactList = contactList.filter(c => c.email !== email);
    return contactList.length < initialLength;
}

AddContact(contact_1);
AddContact(contact_2);
ContactList();

RemoveContact(contact_2.email);
ContactList();


//#endregion


//#region  Basit Bir Banka Hesabı

class BankAccount {
    owner: string;
    balance: number;
}

let CustomerBankAccount: BankAccount = { owner: "Ozan Yaprak", balance: 500 }

function Deposit(amount: number): void {
    if (amount > 0) {
        CustomerBankAccount.balance += amount;
        console.log(CustomerBankAccount.balance);
    }
    else {
        console.log("Lütfen geçerli bir değer giriniz.")
    }
}

Deposit(10);

//#endregion

