// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const todo: MyReadonly2<Todo, "title" | "description"> = {
  title: "Hey",
  description: "foobar",
  completed: false,
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property
todo.completed = true; // OK

// type MyExclude<T, U extends T> = T extends U ? never : T;

// type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
//   [key in keyof T as MyExclude<keyof T, K>]: T[key];
// } & { readonly [key in keyof T as key extends K ? K : never]: T[key] };

type MyExclude<T, U extends T> = T extends U ? never : T;
type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key]: T[key];
};
type MyReadonly2<T extends object, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key];
} & MyOmit<T, K>;
