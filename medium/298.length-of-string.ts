// Compute the length of a string literal, which behaves like String#length.

type s = "Hellodd";

type sLen = Length<StringToArr<s>>;

type StringToArr<T extends string> = T extends `${infer F}${infer Rest}`
  ? [F, ...StringToArr<Rest>]
  : [];

type Length<T extends { length: number }> = T["length"];

// type LengthOfString<S extends string, A extends any[] = []> =
//   S extends `${infer R}${infer U}`
//   ? LengthOfString<U, [...A, R]>
//   : A['length']
