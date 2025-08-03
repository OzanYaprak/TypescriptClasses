let age: number = 20;
let firstName: string = "Ozan";
let lastName: string = "Yaprak";
let isMarried: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Coding"];
let person: { firstName: string; lastName: string; age: number } = {
    firstName: "Ozan",
    lastName: "Yaprak",
    age: 20
};

function display(id: number, name: string) {
    console.log(`ID: ${id}, Name: ${name}`);
}