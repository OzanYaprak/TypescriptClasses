// NUMBER ENUMS
var media;
(function (media) {
    media[media["Newspaper"] = 1] = "Newspaper";
    media[media["Newsletter"] = 2] = "Newsletter";
    media[media["Magazine"] = 3] = "Magazine";
    media[media["Book"] = 4] = "Book";
})(media || (media = {}));
// Enumda başlangıç değeri her zaman 0 olarak verilir, yani eğer dışarıdan bir müdehale olmaz ise yukarıda gösterilen Newspaper 0. index dir.
console.log(media);
console.log(media[1]);
// STRING ENUMS
var PrintMedia;
(function (PrintMedia) {
    PrintMedia["Newspaper"] = "NEWSPAPER";
    PrintMedia["Newsletter"] = "NEWSLETTER";
    PrintMedia["Magazine"] = "MAGAZINE";
    PrintMedia["Book"] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log(PrintMedia.Newspaper);
console.log(PrintMedia['Magazine']);
