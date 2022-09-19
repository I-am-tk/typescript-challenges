type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1

type IndexOf<T extends any[], U, E extends any[] = []> = T extends [infer F, ...infer R]
  ? F extends U
    ? E["length"]
    : IndexOf<R, U, [...E, ""]>
  : -1;
