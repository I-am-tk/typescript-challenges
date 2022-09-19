// Merge two types into a new type. Keys of the second type overrides keys of the first type.

type foo = {
  name: string;
  age: number;
};
type coo = {
  age: string;
  sex: string;
};

type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}

// ** The type that comes first will win
type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U ? U[K] : K extends keyof T ? T[K] : never;
};
