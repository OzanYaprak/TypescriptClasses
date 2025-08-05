var x = 10;
var y = 20;
if (x > y) {
    console.log("x is greater than y");
}
else if (x < y) {
    console.log("x is less than y");
}
else {
    console.log("x is equal to y");
}
// Using Ternary Operator
var result = (x > y) ? "x is greater than y" : (x < y) ? "x is less than y" : "x is equal to y";
console.log(result);
