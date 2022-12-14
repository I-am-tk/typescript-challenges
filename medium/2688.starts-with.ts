// Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U

type a = StartsWith<"abc", "ac">; // expected to be false
type b = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false

type StartsWith<T extends string, F extends string> = T extends `${F}${infer Rest}` ? true : false;
