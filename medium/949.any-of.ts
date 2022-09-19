// Implement Python liked any function in the type system. A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.

type Sample1 = AnyOf<[1]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false.
type Sample3 = AnyOf<[]>; // expected to be false.

type EmptyObject = {
  [key in string]: never;
};
type Falsy = 0 | "" | false | null | undefined | [] | EmptyObject;

// type AnyOf<T extends any[]> = T extends [infer F, ...infer Rest]
//   ? F extends Falsy
//     ? AnyOf<Rest>
//     : true
//   : false;

type AnyOf<T extends readonly any[]> = T[number] extends Falsy ? false : true;
