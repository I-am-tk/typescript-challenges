// Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U

type a = EndsWith<"abc", "bc">; // expected to be true
type b = EndsWith<"abc", "abc">; // expected to be true
type c = EndsWith<"abc", "d">; // expected to be false

// type Reverse<T extends string> = T extends `${infer F}${infer Rest}` ? `${Reverse<Rest>}${F}` : T;
// type StartsWith<T extends string, F extends string> = T extends `${F}${infer Rest}` ? true : false;

// type EndsWith<T extends string, E extends string> = StartsWith<Reverse<T>, Reverse<E>>;

type EndsWith<T extends string, E extends string> = T extends `${infer I}${E}` ? true : false;
