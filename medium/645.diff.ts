// Get an Object that is the difference between O & O1

type O = {
  a: number;
  b: string;
};

type O1 = {
  a: string;
};

type result = Diff<O, O1>;

type Diff<T, U> = {
  [Key in Exclude<keyof T | keyof U, keyof U & keyof T>]: Key extends keyof T
    ? T[Key]
    : Key extends keyof U
    ? U[Key]
    : never;
};

// type NeverOrKey<key, Obj> = key extends keyof Obj ? never : key;
// type KeyOrNever<key, Obj> = key extends keyof Obj ? key : never;

// type Diff<First, Second, Merged = First & Second> = {
//   [i in keyof Merged as i extends keyof First
//     ? NeverOrKey<i, Second>
//     : KeyOrNever<i, Second>]: Merged[i];
// };
