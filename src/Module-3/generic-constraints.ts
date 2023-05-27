const addUserInfo1 = <T extends { name: string; age: number }>(
  userInfor: T
) => {
  const address = "London";
  const newData = { ...userInfor, address };
  return newData;
};

type UserType7 = {
  name: string;
  age: number;
  other: string;
};
const user7 = {
  name: "Mr VV",
  age: 30,
  other: "hello",
};

const res5 = addUserInfo1<UserType7>(user7);

//Generic keyof
type PersionType = {
  name: string;
  age: number;
  salary: number;
};

type newType = "name" | "age" | "address";
type personKeyOf = keyof PersionType;

const a: personKeyOf = "age";

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const res10 = getProperty({ name: "Abc", age: 20 }, "age");
