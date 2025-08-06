//! Function Overloading

function Add(a: number, b: number): number;
function Add(a: string, b: string): string;

function Add(a: any, b: any): any {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + " " + b;
    }
    throw new Error("Invalid arguments");
}

console.log(Add("Ozan", "Yaprak")); // Output: Ozan Yaprak
console.log(Add(10, 20)); // Output: 30

//* Example usage with numbers
function StringAdd(a: string, b: string): string {
    return a + " " + b;
}
console.log(StringAdd("Hello", "World")); // Output: Hello World




