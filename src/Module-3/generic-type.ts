type GenericArray<T> = Array<T>;

const numbers: GenericArray<number> = [1, 2, 34, 6];
const alphabets: GenericArray<string> = ["a", "b", "c"];
const Booleans: GenericArray<boolean> = [true, true];

type GenericuserNameandRollNumber = { name: string; roll: number };

const userNameandRollNumber: Array<GenericuserNameandRollNumber> = [
  {
    name: "X",
    roll: 1,
  },
  {
    name: "Y",
    roll: 2,
  },
  {
    name: "Z",
    roll: 3,
  },
];

// Generic tupple

type GenericTuple<x, y> = [x, y];

const personTuple: GenericTuple<{ name: string; salary: number }, string> = [
  { name: "Abc", salary: 1299339 },
  "Hello",
];
