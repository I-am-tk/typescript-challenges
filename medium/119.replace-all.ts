// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S

type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'

type ReplaceAll<S extends String, From extends string, To extends string> = From extends ""
  ? S
  : S extends `${infer F}${From}${infer Rest}`
  ? `${F}${To}${ReplaceAll<Rest, From, To>}`
  : S;
