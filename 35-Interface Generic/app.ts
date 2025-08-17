interface Months<Type_Key, Type_Value> {
    key: Type_Key,
    value: Type_Value
}

let month: Months<number, string> = {
    key: 1,
    value: "January"
}

// console.log(month);

//* Veya

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}

class List<T> implements Collection<T> {
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
        console.log(this.items)
    }

    remove(o: T): void {
        let index = this.items.indexOf(o);

        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

let list = new List<number>();

for (let index = 0; index < 10; index++) {
    list.add(index)
}