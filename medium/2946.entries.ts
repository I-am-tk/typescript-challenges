// *** Implement the type version of Object.entries

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model>; // ['name', string] | ['age', number] | ['locations', string[] | null];

// type ObjectEntries<T extends Object, Key = keyof T> = Key extends keyof T
//   ? [Key, T[Key]] | ObjectEntries<Omit<T, Key>, Exclude<keyof T, Key>>
//   : never;

// ** This is like a loop you don't need to explicitly write
type ObjectEntries<T, U = keyof T> = U extends keyof T ? [U, T[U]] : never;
