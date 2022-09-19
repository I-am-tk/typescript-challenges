// Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

interface User {
  name?: string;
  age?: number;
  address?: string;
}

type UserRequiredName = RequiredByKeys<User, "name">; // { name: string; age?: number; address?: string }

// *** Just having this makes the type readable
type MergeObject<T extends object> = {
  [Key in keyof T]: T[Key];
};

type RequiredByKeys<T, K extends keyof T = keyof T> = MergeObject<
  Omit<T, K> & Required<Pick<T, keyof T & K>>
>;
