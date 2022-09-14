// Implement the built-in Parameters generic without using it.

const foo = (arg1: string, arg2: number): void => {};

type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]

type MyParameters<T extends (...args: any[]) => unknown> = T extends (...args: infer R) => void
  ? R
  : never;
