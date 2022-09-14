// Implement the JavaScript Array.concat function in the type system. A type takes the two arguments. The output should be a new array that includes inputs in ltr order

type Result = Concat<[1, 3], 2>; // expected to be [1, 2]

// ============= Your Code Here =============

type GetArray<T> = T extends Array<unknown> ? T : [T];
type Concat<T, U> = [...GetArray<T>, ...GetArray<U>];
