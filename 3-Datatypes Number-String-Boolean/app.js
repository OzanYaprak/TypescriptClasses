// Eğer Tanımlanan bir değeri daha sonra değiştireceksek let kullanılır.
// Eğer değer değiştirilmeyecekse ve program içerisinde sabit kalacaksa const keyword u kullanılır.
// NUMBER
var first = 123; // number
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
// STRING
var firstName = "Ozan"; // Tek tırnak veya çift tırnak içerisinde alınıp kullanılabilinir, bir fark yok.
console.log(firstName);
// TEMPLATE STRING
var fullName = "Ozan Yaprak";
var job = "Programcı";
// ES6 Öncesi
var kisiTanim_before_es6 = fullName + "adındaki kişinin mesleği" + job;
// ES6 Sonrası
var kisiTanim_after_es6 = "".concat(fullName, " ad\u0131ndaki ki\u015Finin mesle\u011Fi ").concat(job);
// BOOLEAN
var isPresent = true;
console.log(isPresent);
console.log("---------------------");
console.log("---------------------");
//! Başlangıç Değeri Atama
var Person = /** @class */ (function () {
    function Person() {
        this.name = "Ozan";
        this.surname = "Yaprak";
    }
    return Person;
}());
var Student = /** @class */ (function () {
    function Student(StudentName, isActive, Number) {
        if (StudentName === void 0) { StudentName = "OzanYaprak"; }
        if (isActive === void 0) { isActive = false; }
        if (Number === void 0) { Number = 21; }
        this.StudentName = StudentName;
        this.isActive = isActive;
        this.Number = Number;
    }
    return Student;
}());
var student = new Student();
console.log("".concat(student.StudentName, " isimli ve ").concat(student.Number, " numaral\u0131 "));
var person = new Person();
console.log("Ki\u015Finin ad\u0131 ".concat(person.name, ", soyad\u0131 ise ").concat(person.surname, " d\u0131r."));
