let firstNames: string[] = ["Ozan", "Erhan", "Büşra"];
console.log(firstNames);

// Veya 

let lastNames: Array<string> = ["Yaprak", "Gürbüz"];
console.log(lastNames);

// Tip Belirtmeden Kullanım

let array = [1, 4, "Ozan", "Erhan", true, false];
console.log(array)

//Veya

let fruits: Array<string>;
fruits = ["Apple", "Orange", "Banana"]
console.log(fruits);
console.log(fruits[0]);

let ids: Array<number>;
ids = [1, 2, 7]
console.log(ids);

// MULTI TYPE ARRAY
let values_1: (string | number)[] = ["Apple", 2, "Orange", 3, 5, "Banana"]
let values_2: Array<string | number> = ["Apple", 2, "Orange", 3, 5, "Banana"]
console.log(values_1);



console.log("--------------------------------------");
console.log("--------------------------------------");

class Person {
    NameAndSurname: (string | string)[] = [`Ozan`, `Yaprak`];

    // constructor(NameAndSurname: (string | string)[]) {
    //     this.NameAndSurname = NameAndSurname;
    // }
}

let person_1 = new Person();

console.log(person_1.NameAndSurname);