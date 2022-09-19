// ## Do it

type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]

type Zip<
  T extends readonly any[],
  U extends readonly any[] & {
    length: T["length"];
  }
> = T extends [infer F, ...infer R]
  ? U extends [infer SF, ...infer SR]
    ? [[F, SF], ...Zip<R, SR>]
    : []
  : [];
