
// NUMBER ENUMS
enum media {
    Newspaper = 1, // Dışarıdan index müdehalesi bu şekilde yapılır ve bu müdehale sırasıyla tüm alt elemanların indexlerini etkiler.
    Newsletter,
    Magazine,
    Book
}

// Enumda başlangıç değeri her zaman 0 olarak verilir, yani eğer dışarıdan bir müdehale olmaz ise yukarıda gösterilen Newspaper 0. index dir.

console.log(media);
console.log(media[1]);

// STRING ENUMS
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
console.log(PrintMedia.Newspaper);
console.log(PrintMedia['Magazine']);