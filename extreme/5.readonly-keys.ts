interface Todo {
  readonly title: string;
  readonly description: string;
  completed: boolean;
}

type Keys = GetReadonlyKeys<Todo>; // expected to be "title" | "description"

// ## do
