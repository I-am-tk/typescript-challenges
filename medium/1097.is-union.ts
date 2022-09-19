// ** Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

// What is the logic????????
// Couldn't understand

type case1 = IsUnion<string>; // false
type case2 = IsUnion<string | number>; // true
type case3 = IsUnion<[string | number]>; // false

// type IsNever<Value> = [Value] extends [never] ? true : false;
// type IsUnion<Union, Copy = Union> = IsNever<Union> extends true
//   ? false
//   : Union extends Copy
//   ? [Copy] extends [Union]
//     ? false
//     : true
//   : false;

type IsUnion<T, F = T> = (T extends F ? ([F] extends [T] ? false : true) : never) extends true
  ? true
  : false;

// type IsUnion<Union, Copy = Union> = IsNever<Union> extends true
//   ? false
//   : Union extends Copy
//   ? [Copy] extends [Union]
//     ? false
//     : true
//   : false;
