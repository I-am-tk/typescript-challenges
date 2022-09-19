// Given a tuple type T that only contains string type, and a type U, build an object recursively.

type a = TupleToNestedObject<["a"], string>; // {a: string}
type b = TupleToNestedObject<["a", "b"], number>; // {a: {b: number}}
type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T extends unknown[], U> = T extends [infer F, ...infer Rest]
  ? {
      [Key in F as Key extends PropertyKey ? Key : never]: TupleToNestedObject<Rest, U>;
    }
  : U;
