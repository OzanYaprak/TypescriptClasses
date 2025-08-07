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
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());
var contactList = []; // Boş Liste
var contact_1 = { firstName: "Ozan", lastName: "Yaprak", phone: "5392129984", email: "oznyprk@gmail.com" };
var contact_2 = { firstName: "Erhan", lastName: "Yaprak", phone: "999999999", email: "erhanyaprak@gmail.com" };
function AddContact(contact) {
    contactList.push(contact);
}
function ContactList() {
    contactList.forEach(function (x) {
        console.log("".concat(x.firstName, " - ").concat(x.lastName, " - ").concat(x.phone, " - ").concat(x.email));
    });
}
function RemoveContact(email) {
    var initialLength = contactList.length;
    contactList = contactList.filter(function (c) { return c.email !== email; });
    return contactList.length < initialLength;
}
AddContact(contact_1);
AddContact(contact_2);
ContactList();
RemoveContact(contact_2.email);
ContactList();
//#endregion
//#region  Basit Bir Banka Hesabı
var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    return BankAccount;
}());
var CustomerBankAccount = { owner: "Ozan Yaprak", balance: 500 };
function Deposit(amount) {
    if (amount > 0) {
        CustomerBankAccount.balance += amount;
        console.log(CustomerBankAccount.balance);
    }
    else {
        console.log("Lütfen geçerli bir değer giriniz.");
    }
}
Deposit(10);
//#endregion
