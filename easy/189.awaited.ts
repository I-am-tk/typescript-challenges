// If we have a type which is wrapped type like Promise. How we can get a type which is inside the wrapped type?

// For example: if we have Promise<ExampleType> how to get ExampleType?

type ExampleType = Promise<Promise<string>>;

type Result = MyAwaited<ExampleType>; // string

// ============= Your Code Here =============

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R extends Promise<unknown>
    ? MyAwaited<R>
    : R
  : never;
