// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

type trimed = TrimLeft<"    Hello World  ">; // expected to be 'Hello World  '

type Blank = " " | "\n" | "\t";

type TrimLeft<T extends string> = T extends `${Blank}${infer Rest}` ? TrimLeft<Rest> : T;

// `${L}${TrimLeft<Rest>}` this is not a type so I can't return
