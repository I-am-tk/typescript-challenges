// Implement the type version of Array.shift

type Result = Shift<[1, 2]>; // [2, 1]

type Shift<T> = T extends [infer F, ...infer Rest] ? Rest : never;
