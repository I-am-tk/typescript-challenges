type Result = RequiredKeys<{ foo: number; bar?: string }>;

type GetRequired<T> = {
  [P in keyof T as T[P] extends Required<T>[P] ? P : never]: T[P];
};
type RequiredKeys<T> = keyof GetRequired<T>;
