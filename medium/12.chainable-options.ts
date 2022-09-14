// ****** Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?

// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.md

// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.

declare const config: Chainable;

const result = config
  .option("foo", 123)
  .option("foo", { a: 123 })
  .option("name", "type-challenges")
  // .option("bar", { value: "Hello World" })
  .get();

// expect the type of result to be:
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

// type CheckKey<K extends string, V, O> = K extends keyof O
//   ? O[K] extends V
//     ? { error: `Key '${K}' already exists` }
//     : K
//   : K;

// type Chainable<O = {}> = {
//   option<K extends string, V>(
//     key: CheckKey<K, V, O>,
//     value: V
//   ): Chainable<Omit<O, K> & { [key in K]: V }>;
//   get(): O;
// };

type Chainable<R = {}> = {
  option<K extends string, V>(
    key: K extends keyof R ? (V extends R[K] ? never : K) : K,
    value: V
  ): Chainable<Omit<R, K> & { [P in K]: V }>;
  get(): R;
};

// in also works with string
