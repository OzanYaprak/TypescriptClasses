function getRandomNumber(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numberArray = [10, 20, 30, 40, 50]
console.log(getRandomNumber(numberArray))


function getRandomString(items: string[]): string {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let stringArray = ["Ozan", "Erhan", "Yaprak", "Büşra", "Yaprak"]
console.log(getRandomString(stringArray))


//! Aşağıdaki Kullanım Pek Önerilmiyor çünkü type safety değil
function getRandomElements(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElements(stringArray))
console.log(getRandomElements(numberArray))

//! Bunun yerine Generic kullanım tercih edilir.
function getRandomElements_Generic<Type>(items: Type[]): Type {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElements_Generic(stringArray))
console.log(getRandomElements_Generic(numberArray))