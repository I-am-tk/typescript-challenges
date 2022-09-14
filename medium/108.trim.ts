// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.

type trimmed = Trim<"  Hello World  ">; // expected to be 'Hello World'

type Blank = "  " | "\n" | "\t";

type Trim<S extends string> = S extends `${Blank}${infer V}` | `${infer V}${Blank}` ? Trim<V> : S;

// see the error
// type TrimLeft<T extends string> = T extends `${Blank}${infer Rest}` ? TrimLeft<Rest> : Rest;
