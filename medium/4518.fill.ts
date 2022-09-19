// ### Todo
// type exp = Fill<[1, 2, 3], 2>; // expected to be [0, 0, 0]

// type Fill<T extends any[], V, S extends number = 0, E extends number = T["length"], R extends any[] = []> =
//   T extends [infer F,...infer R] =
