function Add(a: number, b: number): number {
    return a + b;
}

let result = Add(5, 10);
console.log(result); // Output: 15
console.log(typeof (result));

function birlestir(isim: string, soyisim: string): string {
    return isim + " " + soyisim;
}
function birlestir_2(isim: string, soyisim: string = "Yaprak"): string { // Default value for soyisim
    return isim + " " + soyisim;
}
console.log(birlestir("Ahmet", "Yılmaz")); // Output: Ahmet Yılmaz
console.log(birlestir_2("Ahmet")); // Output: Ahmet Yaprak
