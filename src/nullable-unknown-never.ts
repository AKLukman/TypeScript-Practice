// nullable type

const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search");
  } else {
    console.log("searching");
  }
};
searchName(null);

// Unknown
const getCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`My speed ${convertedSpeed} kmh`);
  } else if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(convertedSpeed);
  }
};
getCarSpeed(10);
getCarSpeed("20 kmh");

// never
function errorThrow(message: string): never {
  throw new Error(message);
}

errorThrow("Error");
