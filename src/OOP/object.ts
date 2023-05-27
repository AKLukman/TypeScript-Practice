class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(`This ${this.name} says ${this.sound}`);
  }
}

const dog = new Animal("German shephard", "dog", "Gew Ghew");
dog.makeSound();

// Updated
class Car {
  constructor(public name: string, public lanched: number) {}
  carDetails() {
    console.log(`Car ${this.name} lanched ${this.lanched}`);
  }
}

const bmw = new Car("BMW", 1999);
bmw.carDetails();
