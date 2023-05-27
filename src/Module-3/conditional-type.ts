// dependent type
type a1 = string;

type a2 = a1 extends string ? string : null;

// nested conditon type
type d1 = string;
type d2 = number;
type d3 = null;

type d = d1 extends string
  ? string
  : d2 extends number
  ? number
  : d3 extends null
  ? null
  : never;

//   example
type Seikh = {
  wife1: string;
  wife2: string;
};
type A = keyof Seikh;
type ceckproperty<T, K> = K extends keyof Seikh ? true : false;

type checkWife = ceckproperty<Seikh, "wife1">;

// example2
type Bandobi = "A" | "B" | "C";
type RemoveBandobi<T, K> = T extends K ? never : T;
type CurrentBandobi = RemoveBandobi<Bandobi, "C">;
