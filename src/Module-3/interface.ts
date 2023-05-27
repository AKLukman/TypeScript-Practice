// type alias
type UserType = {
  name: string;
  age: number;
};

type ExtendsUserType = UserType & {
  role: string;
};

const User: ExtendsUserType = {
  name: "Rashed",
  age: 22,
  role: "Unknown",
};

// type alias using in function type
type AddNumberType = (num1: number, num2: number) => number;
const addNumber: AddNumberType = (num1, num2) => {
  return num1 + num2;
};

// Type ailias using array type;

type RollNumberType = number[];
const RollNumbers: RollNumberType = [1, 2, 3, 4];

// interface
interface UserInterFace {
  name: string;
  age: number;
}

// extends
interface IExtendsUser extends UserInterFace {
  role: string;
}

const user1: IExtendsUser = {
  name: "Saeed",
  age: 14,
  role: "Scientist",
};

// Function type decalre using interface
interface IAddNumber {
  (num1: number, num2: number): number;
}

const addNumberInt: IAddNumber = (num1, num2) => {
  return num1 + num2;
};

// Interface Using Array type
interface IRollNumbers {
  [index: number]: number;
}

const rollNumber: IRollNumbers = [1, 2, 3, 4, 5, 6];
