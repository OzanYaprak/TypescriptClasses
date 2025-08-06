//! Optional Parameters
function Carpim(a, b, c) {
    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}
console.log(Carpim(2, 3)); // 6
console.log(Carpim(2, 3, 4)); // 24
//! Arrow Functions // Lambda Functions
var CarpimArrow = function (a, b) {
    return a * b;
};
console.log(CarpimArrow(2, 3)); // 6
//* Diğer bir kullanım
var IsimYazdir = function (isim) { return isim; };
console.log(IsimYazdir("Ozan"));
