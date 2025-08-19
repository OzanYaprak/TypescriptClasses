class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) { }

    isEmpty(): Boolean {
        return this.elements.length === 0;
    }
    isFull(): Boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error(`The Stack Is Overflow!`);
        }
        this.elements.push(element);
    }
    pop(): T {
        if (this.elements.length === 0) {
            throw new Error("The Stack Is Empty!");
        }
        return this.elements.pop() as T;
    }

}

function randomNumber(low: number, high: number): number {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let numbers = new Stack<number>(5);

while (!numbers.isFull()) {
    let n = randomNumber(1, 10);
    console.log(`Push ${n} into the stack`);
    numbers.push(n);
}
while (!numbers.isEmpty()) {
    let n = numbers.pop();
    console.log(`${n} removed from the stack`);
}