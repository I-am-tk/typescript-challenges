// Implement permutation type that transforms union types into the array that includes permutations of unions.

// https://github.com/type-challenges/type-challenges/blob/main/questions/00296-medium-permutation/README.md

type perm = Permutation<"A" | "B" | "C">; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// See the problem with the below code and how to avoid it?
// type Permutation<T, A = T> = T extends A ? [T, ...Permutation<Exclude<A, T>>] : [];
// How to avoid never

type Permutation<T, A = T> = [T] extends [never]
  ? []
  : T extends A
  ? [T, ...Permutation<Exclude<A, T>>]
  : [];
