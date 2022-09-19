// Implement the Absolute type. A type that take string, number or bigint. The output should be a positive number string

type Test = -100;
type Result = Absolute<Test>; // expected to be "100"

// type Absolute<T extends number | string | bigint> = `${T}` extends `${infer F}${infer Rest}`
//   ? `${F extends "-" ? "" : F}${Rest}`
//   : T;

type Absolute<Value extends number | string | bigint> = `${Value}` extends `-${infer R}`
  ? R
  : `${Value}`;
