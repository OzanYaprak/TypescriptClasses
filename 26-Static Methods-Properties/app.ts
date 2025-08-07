class Circle {
    static pi: number = 3.14;
    pi: 3;

    constructor() {
        this.pi++;
        Circle.pi++;
    }

    static area(radius: number): number {
        return this.pi * radius * radius;
    }
}

let obje_1 = new Circle();
let obje_2 = new Circle();

console.log(obje_1.pi);

console.log(Circle.pi);
console.log(Circle.area(5));

