function Toplam(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => { total += num; });
    return total;
}

console.log(Toplam(1, 2, 3, 4, 5)); // Output: 15
console.log(Toplam(10, 20, 30)); // Output: 60
console.log(Toplam(2, 10, 50, 15, 60, 45, 25, 55, 80, 95)); // Output: 437
console.log(Toplam(100)); // Output: 100
console.log(Toplam()); // Output: 0

function Birlestir(message: string, ...names: string[]): string {
    return `${message} ${names.join(', ')}`;
}

console.log(Birlestir("Merhaba", "Ali", "Ayşe", "Mehmet")); // Output: Merhaba Ali, Ayşe, Mehmet
console.log(Birlestir("Selam", "Ahmet")); // Output: Selam Ahmet
console.log(Birlestir("Hoş geldiniz")); // Output: Hoş geldiniz