type FriendType = {
  name: string;
  age?: number;
  profesion: string;
};

const frnd1: FriendType = {
  name: "Kamrul",
  age: 25,
  profesion: "web developer",
};

const frnd2: FriendType = {
  name: "Mislu",
  age: 25,
  profesion: "web developer",
};
const frnd3: FriendType = {
  name: "Kamrul",
  age: 25,
  profesion: "Teacher",
};

type CourseName = string;

const courseName: CourseName = "next level";

type OperationType = (x: number, y: number) => number;

// const calculate = (
//   num1: number,
//   num2: number,
//   operation: OperationType
// ) => {
//   return operation(num1, num2);
// };

const calculate = (
  num1: number,
  num2: number,
  operation: (x: number, y: number) => number
) => {
  return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
console.log(calculate(100, 20, (x, y) => x - y));
console.log("hello");
