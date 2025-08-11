// Eğer Tanımlanan bir değeri daha sonra değiştireceksek let kullanılır.
// Eğer değer değiştirilmeyecekse ve program içerisinde sabit kalacaksa const keyword u kullanılır.

// NUMBER
let first: number = 123; // number
let second: number = 0x37CF; // hexadecimal
let third: number = 0o377; // octal
let fourth: number = 0b111001; // binary

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// STRING
let firstName: string = "Ozan"; // Tek tırnak veya çift tırnak içerisinde alınıp kullanılabilinir, bir fark yok.
console.log(firstName);

// TEMPLATE STRING
let fullName: string = "Ozan Yaprak";
let job: string = "Programcı";

// ES6 Öncesi
let kisiTanim_before_es6: string = fullName + "adındaki kişinin mesleği" + job;
// ES6 Sonrası
let kisiTanim_after_es6: string = `${fullName} adındaki kişinin mesleği ${job}`;


// BOOLEAN
let isPresent: boolean = true;
console.log(isPresent);

console.log("---------------------")
console.log("---------------------")
//! Başlangıç Değeri Atama
class Person {
    name: string = "Ozan";
    surname: string = "Yaprak";
}

class Student {
    StudentName: string;
    isActive: boolean;
    Number: number;

    constructor(StudentName: string = "OzanYaprak", isActive: boolean = false, Number: number = 21) {
        this.StudentName = StudentName;
        this.isActive = isActive;
        this.Number = Number;
    }
}
let student = new Student();
console.log(`${student.StudentName} isimli ve ${student.Number} numaralı `)

let person = new Person();
console.log(`Kişinin adı ${person.name}, soyadı ise ${person.surname} dır.`)
