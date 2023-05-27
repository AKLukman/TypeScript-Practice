class Person2 {
  takeNap(): void {
    console.log("Sleeping 8 housr in a day");
  }
}

class Student1 extends Person2 {
  takeNap(): void {
    console.log("Sleeping 10 housr in a day");
  }
}

class Student2 extends Person2 {
  takeNap(): void {
    console.log("Sleeping 9 housr in a day");
  }
}

function getNap(param: Person2) {
  param.takeNap();
}

const person = new Person2();
const person5 = new Student1();
const person4 = new Student2();
getNap(person);
getNap(person4);
getNap(person5);

// example2
class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectengle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return (this.height * this.width) / 2;
  }
}

function getAreaOfShape(param: Shape) {
  console.log(param.getArea());
}

getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectengle(10, 10));
