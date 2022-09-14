// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.

type capitalized = MyCapitalize<"hello world">; // expected to be 'Hello world'

type MyETable = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

type MyUpperCase<T> = T extends keyof MyETable ? MyETable[T] : T;

type MyCapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? `${MyUpperCase<F>}${R}`
  : MyUpperCase<S>;
