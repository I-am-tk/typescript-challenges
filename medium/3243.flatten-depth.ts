// ******** Recursively flatten array up to depth times.

type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
// If the depth is provided, it's guaranteed to be positive integer.

// type FlattenDepth<T extends any[], D extends number = 1> = D extends 0
//   ? T
//   : T extends [infer F, ...infer Rest]
//   ? [...(F extends any[] ? FlattenDepth<F, MinusOne<D>> : [F]), ...FlattenDepth<Rest, D>]
//   : [];

// type MinusOne<T extends number> = ArrayOfLen<T> extends [infer F, ...infer R] ? R["length"] : 0;

// type ArrayOfLen<T extends number, U extends any[] = []> = U["length"] extends T
//   ? // U["length"] extends T is working but not T extens U['lenght'] why
//     U
//   : ArrayOfLen<T, [...U, " "]>;

// **** Better than anything else
type FlattenDepth<
  T extends any[],
  Deep = 1,
  CurrDeep extends any[] = []
> = CurrDeep["length"] extends Deep
  ? T
  : CurrDeep["length"] extends T["length"]
  ? T
  : FlattenDepth<Flatten<T>, Deep, [...CurrDeep, any]>;

type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...F, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : T;
