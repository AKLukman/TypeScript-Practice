// interface

// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
// }

// class Vehicle implements IVehicle {
//   constructor(public name: string, public brand: string, model: number) {}
//   startEngine(): void {
//     console.log("Starting Engine");
//   }
//   stopEngine(): void {
//     console.log("Stop Engine");
//   }
//   test() {
//     console.log("testing");
//   }
// }

// const vehicle1 = new Vehicle("car", "BMW", 2000);
// console.log(vehicle1);

// abstract class

abstract class Vehicle {
  constructor(public name: string, public brand: string, model: number) {}
  abstract startEngine(): void;
  abstract stopEngine(): void;
  move() {
    console.log("moving");
  }
}

class Honda extends Vehicle {
  startEngine(): void {
    console.log("start");
  }
  stopEngine(): void {
    console.log("stop");
  }
}
