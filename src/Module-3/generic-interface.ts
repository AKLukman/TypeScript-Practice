interface GenericInterface<T, U = null> {
  name: string;
  wife: T;
  husband?: U;
}

const person1: GenericInterface<boolean> = {
  name: "Mr x",
  wife: true,
};
const person2: GenericInterface<string> = {
  name: "Mr x",
  wife: "Y",
};

interface WifeInterface {
  post: string;
  salary: number;
}
const person3: GenericInterface<WifeInterface> = {
  name: "Mr x",
  wife: {
    post: "house wife",
    salary: 1000000,
  },
};
