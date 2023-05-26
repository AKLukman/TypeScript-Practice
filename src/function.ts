// normal fumction
// default value always last parameter

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}
console.log(add(2));

// arrow function
const add1 = (num1: number, num2: number): number => {
  return num1 + num2;
};

// call back function exmaple
const array = [1, 2, 3, 5];
const newArray = array.map((ele: number) => ele * ele);

// method in array
const persion: {
  name: string;
  balance: number;
  addBalance(money: number): string;
} = {
  name: "Mezba",
  balance: 5,
  addBalance(money: number) {
    return `New balance is ${this.balance + money}`;
  },
};

// Spread operator
const myFriends = ["a", "b", "c"];
const newFriends = ["c", "d", "e"];
myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter
const greetFriend = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriend("Tanin", "Rubel");

// Destructuring array
const [bestFriend] = myFriends;

// Destructuring object
const myBestFriend: {
  name1: string;
  age: number;
} = {
  name1: "Mislu",
  age: 26,
};
const { name1 } = myBestFriend;
