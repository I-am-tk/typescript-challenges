type A = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]

// ## Why this one not working
// type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
//   ? [F] | [F, ...Subsequence<R>]
//   : [];

type Subsequence<T extends any[]> = T extends [infer F, ...infer R]
  ? [F, ...Subsequence<R>] | Subsequence<R>
  : [];
