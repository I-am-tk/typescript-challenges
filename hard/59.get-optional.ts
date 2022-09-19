type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }

type GetOptional<T> = {
  [P in keyof T as Omit<T, P> extends T ? P : never]: T[P];
};

// type GetOptional<T> = {
//   [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
// };
