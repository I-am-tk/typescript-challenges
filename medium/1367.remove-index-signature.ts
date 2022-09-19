// ***** Implement RemoveIndexSignature<T> , exclude the index signature from object types.
// Couldn't understand

type Foo = {
  [key: string]: any;
  a: "hello";
  foo(): void;
};

type A = RemoveIndexSignature<Foo>; // expected { foo(): void }

type RemoveIndexSignature<T> = {
  [k in keyof T as string extends k
    ? never
    : number extends k
    ? never
    : symbol extends k
    ? never
    : k]: T[k];
};
