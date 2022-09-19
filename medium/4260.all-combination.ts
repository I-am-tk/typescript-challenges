type AllCombinations_ABC = AllCombinations<"ABC">;
// should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'

// type isNeverStr<T> = [T] extends [never] ? true : false;
// type StrToUnion<T extends string> = T extends `${infer F}${infer L}` ? F | StrToUnion<L> : "";
// type AllCombinations<
//   T extends string,
//   S extends string = StrToUnion<T>,
//   V extends string = StrToUnion<T>
// > = S extends V ? `${S}${AllCombinations<never, V, Exclude<V, S>>}` : "";

// ** Brilliant
type String2Union<S extends string> = S extends `${infer C}${infer R}`
  ? C | String2Union<R>
  : never;

type AllCombinations<S extends string, U extends string = String2Union<S>> = [U] extends [never]
  ? ""
  : "" | { [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}` }[U];
