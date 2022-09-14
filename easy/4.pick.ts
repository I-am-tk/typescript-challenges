// * Implement the built-in Pick<T, K> generic without using it.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo1: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// ============= Your Code Here =============

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
