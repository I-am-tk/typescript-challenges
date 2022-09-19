type camelCase1 = CamelCase<"hello_world_with_types">;
// expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<"HELLO_WORLD_WITH_TYPES">;
// expected to be same as previous one

type CamelCase<T extends string, P extends string = ""> = T extends `${infer F}${infer R}`
  ? P extends "_"
    ? `${Uppercase<F>}${CamelCase<R, F>}`
    : F extends "_"
    ? `${CamelCase<R, F>}`
    : `${Lowercase<F>}${CamelCase<R, F>}`
  : T;
