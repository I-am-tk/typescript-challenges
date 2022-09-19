// Implement the type version of lodash's _.flip.

// Type FlipArguments<T> requires function type T and returns a new function type which has the same return type of T but reversed parameters.

type Flipped = FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>;
// (arg0: boolean, arg1: number, arg2: string) => void

type ReverseArr<T extends any[]> = T extends [infer F, ...infer Rest]
  ? [...ReverseArr<Rest>, F]
  : [];

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer A) => infer R
  ? (...args: ReverseArr<A>) => R
  : never;

// *** (...args: [...infer A])
// *** (...args: infer A)
