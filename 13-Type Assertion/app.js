// ! TypeScript'te type assertion (tür belirtme), TypeScript'e bir değişkenin veya ifadenin türünü senin onayladığını ve bu türü kullanmasını söylediğin bir yöntemdir. Yani, TypeScript'e "Ben bu değerin türünü biliyorum, bana güven" demek gibi düşünebilirsin.
var code = "12345"; // 'any' türü, TypeScript'in bu değişkenin türünü bilmediğini gösterir.
var codeLength = code.length; // 'as' ifadesi ile 'code' değişkeninin bir string olduğunu belirtiyoruz.
console.log(codeLength); // 5
// Alternatif olarak, 'angle-bracket' syntax'ını da kullanabilirsin.
var codeLength2 = code.length; // 'angle-bracket' syntax'ı ile de aynı şeyi yapıyoruz.
console.log(codeLength2); // 5
var user = {}; // ! Type assertion ile 'user' değişkeninin türünü 'User' olarak belirtiyoruz.
console.log(typeof (user));
user.name = "John Doe"; // 'user' değişkenini 'User' arayüzüne uygun olarak tanımlıyoruz.
user.age = 30; // 'age' özelliğini de ekliyoruz.
console.log(user); // { name: 'John Doe', age: 30 }
