// Implement Replace<S, From, To> which replace the string From with To once in the given string S

type replaced = Replace<"types are fun! ok", "fun", "awesome">; // expected to be 'types are awesome!'

type Replace<S extends String, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer L}`
  ? `${F}${To}${L}`
  : S;

// type Replace<
//   S extends string,
//   F extends string,
//   T extends string
// > = S extends `${infer L}${infer Rest}`
//   ? S extends `${F}${infer RRest}`
//     ? `${T}${Replace<RRest, F, T>}`
//     : `${L}${Replace<Rest, F, T>}`
//   : S;
