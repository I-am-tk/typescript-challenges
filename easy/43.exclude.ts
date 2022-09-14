// Implement the built-in Exclude<T, U>

type Result = MyExclude<"a" | "b" | "c", "a" | "b">; // 'b' | 'c'

// ============= Your Code Here =============

type MyExclude<U, E extends U> = U extends E ? never : U;
