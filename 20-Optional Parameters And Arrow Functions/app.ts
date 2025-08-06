//! Optional Parameters
function Carpim(a: number, b: number, c?: number) {

    if (c !== undefined) {
        return a * b * c;
    }
    return a * b;
}

console.log(Carpim(2, 3)); // 6
console.log(Carpim(2, 3, 4)); // 24

//! Arrow Functions // Lambda Functions
let CarpimArrow = (a: number, b: number): number => {
    return a * b;
}
console.log(CarpimArrow(2, 3)); // 6

//* Diğer bir kullanım

let IsimYazdir = (isim: string): string => isim;
console.log(IsimYazdir("Ozan"));