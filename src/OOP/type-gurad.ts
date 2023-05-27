// keyof guard

type Alphanumeric = string | number;

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (param1 === "number" && param2 === "number") {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}

add(1, 2);
add("1", "2");

// In Guard

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "admin";
};

function getUser(user: NormalUser | AdminUser): string {
  if ("role" in user) {
    return `This user role is ${user.role}`;
  } else {
    return `This user is normal`;
  }
}

const normalUser: NormalUser = {
  name: "Mr User",
};
const adminUser: AdminUser = {
  name: "Mr Admin",
  role: "admin",
};

console.log(getUser(adminUser));
console.log(getUser(normalUser));

// instanceof guard

class Animal1 {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log("Making sound");
  }
}

class Dog extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log("Barking");
  }
}
class Cat extends Animal1 {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeaw() {
    console.log("Meaw");
  }
}

function isCat(animal: Animal1): animal is Cat{
    return animal instanceof Cat;
}
function getAnimal(animal: Animal1) {
  if (animal instanceof Dog) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeaw();
  } else {
    animal.makeSound;
  }
}
const dog1 = new Dog("German Shephard", "dog");
const cat1 = new Cat("Cat", "Cat");
getAnimal(dog1);
getAnimal(cat1);
