const makePromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched";
    if (data) {
      resolve(data);
    } else {
      reject("rejected");
    }
  });
};

const getPromise = async (): Promise<string> => {
  const data = await makePromise();
  return data;
};

interface Idata {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<Idata> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const getTodoData = async (): Promise<void> => {
  const data = await getTodo();
  console.log(data);
};
