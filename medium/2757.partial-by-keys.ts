// *** Implement a generic PartialByKeys<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

interface User {
  name: string;
  age: number;
  address: string;
}

type UserPartialName = PartialByKeys<User, "name">; // { name?:string; age:number; address:string }

// type PartialByKeys<Obj, Keys = keyof Obj> = MergeObjects<
//   {
//     [i in keyof Obj as i extends Keys ? never : i]: Obj[i];
//   } & {
//     [i in keyof Obj as i extends Keys ? i : never]?: Obj[i];
//   }
// >;

type MergeObjects<Obj> = {
  [i in keyof Obj]: Obj[i];
};

type PartialByKeys<T, K extends keyof any = keyof T> = MergeObjects<
  Omit<T, K> & Partial<Pick<T, K & keyof T>>
>;

// how does & behaves with conflicting keys
// how does & behaves with conflicting
