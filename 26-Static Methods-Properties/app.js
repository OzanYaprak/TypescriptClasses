var Circle = /** @class */ (function () {
    function Circle() {
        this.pi++;
        Circle.pi++;
    }
    Circle.area = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var obje_1 = new Circle();
var obje_2 = new Circle();
console.log(obje_1.pi);
console.log(Circle.pi);
console.log(Circle.area(5));
