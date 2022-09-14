// Implement a generic Last<T> that takes an Array T and returns its last element.

type arr1 = ["a", "b", "c"];
type arr2 = [];

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1

type Last<T extends any[]> = T extends [...infer N, infer L] ? L : never;
