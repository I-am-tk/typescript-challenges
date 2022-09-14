// Implement permutation type that transforms union types into the array that includes permutations of unions.

// https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T> = T extends infer K ? [T, Permutation<Exclude<T, K>>] : never;
