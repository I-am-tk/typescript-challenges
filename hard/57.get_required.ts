type I = GetRequired<{ foo: undefined; bar?: string }>;
// expected to be { foo: number }

// type GetRequired<T> = {
//   [K in keyof T as undefined extends T[K] ? (T[K] extends undefined ? K : never) : K]: T[K];
// };

type GetRequired<T> = {
  [P in keyof T as Omit<T, P> extends T ? never : P]: T[P];
};
