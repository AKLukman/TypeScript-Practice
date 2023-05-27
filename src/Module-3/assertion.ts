let courseName1: any = "web";

(courseName1 as string).length;

function kgToGm(value: number | string): string | number | undefined {
  if (typeof value === "string") {
    const result = parseFloat(value) * 1000;
    return `The result is ${result}gm`;
  } else if (typeof value === "number") {
    const result = value * 1000;
    return `The result is ${result}gm`;
  }
}

const resultTobeNumber = kgToGm(10) as number;
const resultTobeString = kgToGm("10") as string;
console.log(resultTobeNumber);

type CustomType = {
  message: string;
};

try {
} catch (error) {
  (error as CustomType).message;
}
