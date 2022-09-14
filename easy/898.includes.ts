// Implement the JavaScript Array.includes function in the type system. A type takes the two arguments. The output should be a boolean true or false.

type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Hello">; // expected to be `false`

// ============= Your Code Here =============

type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

// Why it is wrong?
// type Includes<T extends any[], U> = T[number] extends U ? true : false;

// Another way
// type Includes<T extends readonly any[], U> = T extends [infer F, ...infer A]
//   ? Equal<F, U> extends true
//     ? true
//     : Includes<A, U>
//   : false;

// https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript/68963796#68963796
// type MyEqual<T, U> =
//   (<G>() => G extends T ? 1 : 2) extends
//   (<G>() => G extends U ? 1 : 2) ? true : false

// type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
//   ? MyEqual<First, U> extends true ? true : Includes<Rest, U>
//   : false
