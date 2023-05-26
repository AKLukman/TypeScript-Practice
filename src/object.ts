const user: {
  // specific type/literal type
  // readonly company=string
  company: "PHero";
  name: string;
  age: number;
  isMerried: boolean;
  //   optional type
  wife?: string;
} = {
  company: "PHero",
  name: "Montu mia",
  age: 32,
  isMerried: true,
  wife: "bibi",
};

function generateAdder(a: number): (b: number) => number {
  return function (b: number) {
    return a + b;
  };
}

const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));
