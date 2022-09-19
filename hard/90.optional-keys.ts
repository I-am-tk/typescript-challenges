type Result = OptionalKeys<{ foo: number; bar?: string }>;

type GetOptional<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? never : P]: T[P];
};
type OptionalKeys<T> = keyof GetOptional<T>;
