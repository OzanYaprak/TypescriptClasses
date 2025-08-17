function merge<Type_1, Type_2>(object_1: Type_1, object_2: Type_2) {
    return { ...object_1, ...object_2 }
}

let person = merge({ name: "Ozan" }, { age: 22 });
console.log(person)