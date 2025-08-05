const clueLess: unknown = "1"
console.log(typeof (clueLess)); // "string"

const clueLessNumber: number = <number>clueLess; // Type assertion
console.log(clueLessNumber); // "number"

//* Using 'as' syntax for type assertion

const clueLessNumber2 = clueLess as number; // Type assertion
console.log(clueLessNumber2); // "number"