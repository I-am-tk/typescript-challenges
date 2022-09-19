// Implement a type that adds a new field to the interface. The type takes the three arguments. The output should be an object with the new field.

type Test = { id: "1" };
type Result = AppendToObject<Test, "value1", 4>; // expected to be { id: '1', value: 4 }

// type AppendToObject<T, K extends string, V> = T & { [P in K]: V };

type AppendToObject<Obj, Key extends string, Value> = {
  [i in keyof Obj | Key]: i extends keyof Obj ? Obj[i] : Value;
};
