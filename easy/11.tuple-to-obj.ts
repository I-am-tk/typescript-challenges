// * Give an array, transform into an object type and the key/value must in the given array.

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// ============= Your Code Here =============

type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K;
};
// In the above case why we are not chekcing that the array should be of type number or string
// Ans: Because T[number] something elese than it is ignored.
// Try adding an object to the `tuple` and see the type of `result`.

// type TupleToObject<T extends readonly (string|number)[]> = {
//   [K in T[number]]: K;
// };

// My Wrong answer
// Why?
// type TupleToObject<T extends readonly (string | number)[]> = {
//   [K in keyof T as `${T[K] extends string | number ? T[K] : ""}`]: T[K];
// };
