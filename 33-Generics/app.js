function getRandomNumber(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numberArray = [10, 20, 30, 40, 50];
console.log(getRandomNumber(numberArray));
function getRandomString(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var stringArray = ["Ozan", "Erhan", "Yaprak", "Büşra", "Yaprak"];
console.log(getRandomString(stringArray));
//! Aşağıdaki Kullanım Pek Önerilmiyor çünkü type safety değil
function getRandomElements(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElements(stringArray));
console.log(getRandomElements(numberArray));
//! Bunun yerine Generic kullanım tercih edilir.
function getRandomElements_Generic(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElements_Generic(stringArray));
console.log(getRandomElements_Generic(numberArray));
