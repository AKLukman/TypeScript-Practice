type Volume = {
  height: number;
  width: number;
  dept: number;
};
// type Area = {
//   //   [key in keyof Volume]: string;
//   [key in keyof Volume]: Volume[key];
// };

type Area<T> = {
  readonly [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number }> = {
  height: 10,
  width: 10,
};
