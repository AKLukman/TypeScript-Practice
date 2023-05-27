// Arrow function
const createArray = (param: string): string[] => {
  return [param];
};

// Generic Arrow function
const createArray1 = <T>(param: T): T[] => {
  return [param];
};

type Name = {
  name: string;
};

const result1 = createArray1<string>("Bangladesh");
const result2 = createArray1<boolean>(true);
const result3 = createArray1<Name>({ name: "Max" });

// Generic Arrow function with tuple

const createArray2 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};

const res1 = createArray2<number, string>(1, "Hello");
const res2 = createArray2<object, Array<string>>({ name: "Mr anything" }, [
  "Apple",
]);

// Spread operator

const addUserInfo = <T>(userInfor: T) => {
  const address = "London";
  const newData = { ...userInfor, address };
  return newData;
};
const users6 = {
  name: "Mr VV",
  age: 30,
};

const res4 = addUserInfo(users6);

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}

const users1 = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users1, 0, "name"));

interface Person {
  firstName: string;

  lastName: string;
}

function fullName<T extends Person>(person: T): string {
  return `${person.firstName} ${person.lastName}`;
}
