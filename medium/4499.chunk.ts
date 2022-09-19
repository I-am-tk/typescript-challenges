type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]

type Chunk<T extends any[], S extends number = 1, RE extends any[] = []> = T extends [
  infer F,
  ...infer R
]
  ? [...RE, F]["length"] extends S
    ? [[...RE, F], ...Chunk<R, S>]
    : Chunk<R, S, [...RE, F]>
  : RE;
