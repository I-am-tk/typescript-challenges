type Trimed = TrimRight<"   Hello World    ">; // expected to be '   Hello World'

type Space = " " | "\n" | "\t";
type TrimRight<T extends string> = T extends `${infer R}${Space}` ? TrimRight<R> : T;
