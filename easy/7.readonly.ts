// - Implement the built-in Readonly<T> generic without using it.

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
