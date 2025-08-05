var clueLess = "1";
console.log(typeof (clueLess)); // "string"
var clueLessNumber = clueLess; // Type assertion
console.log(clueLessNumber); // "number"
//* Using 'as' syntax for type assertion
var clueLessNumber2 = clueLess; // Type assertion
console.log(clueLessNumber2); // "number"
