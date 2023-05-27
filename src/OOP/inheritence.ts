class Persion {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep ${hours}`;
  }
}

class Student extends Persion {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Mr X", 15, "Sylhet");
const res = student1.makeSleep(8);
console.log(res);

class Teacher extends Persion {
  constructor(
    name: string,
    age: number,
    address: string,
    public designation: string
  ) {
    super(name, age, address);
  }

  takeClasses(classes: number): string {
    return `This ${this.name} will take ${classes} classes`;
  }
}

const teacher1 = new Teacher("Mr T", 40, "Sylhet", "Head");
const res6 = teacher1.makeSleep(8);
const res7 = teacher1.takeClasses(2);
console.log(res6);
console.log(res7);
