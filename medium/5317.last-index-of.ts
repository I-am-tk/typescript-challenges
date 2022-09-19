type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
type Res2 = LastIndexOf<[0, 0, 3], 2>; // -1

type LastIndexOf<T extends any[], F> = T extends [...infer R, infer L]
  ? L extends F
    ? R["length"]
    : LastIndexOf<R, F>
  : -1;
