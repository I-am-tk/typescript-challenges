type capitalized = CapitalizeWords<"hello world, my friends">;
// expected to be 'Hello World, My Friends'

type CapitalizeWords<T extends string> = T extends `${infer W} ${infer R}`
  ? `${Capitalize<W>} ${CapitalizeWords<R>}`
  : Capitalize<T>;

// type MySeparators = "." | "," | " " | "|";
// type CapitalizeWords<T, Separator extends string = "."> = T extends `${infer Head}${infer Tail}`
//   ? Separator extends MySeparators
//     ? `${Capitalize<Head>}${CapitalizeWords<Tail, Head>}`
//     : `${Head}${CapitalizeWords<Tail, Head>}`
//   : T;
