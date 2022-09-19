// Drop a specified char from a string.

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">; // 'butterfly!'

type DropChar<T extends string, U extends string> = T extends `${infer Before}${U}${infer After}`
  ? `${Before}${DropChar<After, U>}`
  : T;

// type DropChar<T extends string, U extends string> = T extends `${infer F}${infer Rest}`
//   ? F extends U
//     ? DropChar<Rest, U>
//     : `${F}${DropChar<Rest, U>}`
//   : "";
