// ******* Implement a type ReplaceKeys, that replace keys in union types, if some type has not this key, just skip replacing, A type takes three arguments.

type NodeA = {
  type: "A";
  name: string;
  flag: number;
};

type NodeB = {
  type: "B";
  id: number;
  flag: number;
};

type NodeC = {
  type: "C";
  name: string;
  flag: number;
};

type Nodes = NodeA | NodeB | NodeC;

type ReplacedNodes = ReplaceKeys<Nodes, "name" | "flag", { name: number; flag: string }>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

// const check: ReplacedNodes = {
//   type: 'C',
//   flag: 3,
//   name: 'hello'

// }

type ReplacedNotExistKeys = ReplaceKeys<Nodes, "name", { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

type ReplaceKeys<Nodes, Union, Data> = {
  [i in keyof Nodes]: i extends Union ? (i extends keyof Data ? Data[i] : never) : Nodes[i];
};

// keyof Union of Object behaves differently
// - in index all keys will be traversed.
// - type = keyof object union -> then
