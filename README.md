- `in` in typescript
- `readonly` in typescript
- `keyof` in typescript
- `as const` in typescript and difference between `as const` and `readonly`
- `as` vs `as const` in typescript
- `T extends literalType or otherType`
- `extends` when it just extends and when it act as if
- When can we spread item in an array.
- `[infer T, any]` inside array
- Loop jesa check kahan pe hota he
- difference between `extends` and `equal`
- array values check arr[number]
- what does declare do

## Mistakes

- `mapped types` can't done with `interfaces`
- in means value

## Read

- any (don't give me type errors)
- **type alises**, giving types a name could be object,string
- **interface**, only for object
- Almost all features of an interface are available in type, the key distinction is that a **type cannot be re-opened** to add new properties vs an interface which is always extendable.
- (as) for **type assertion**, after a value, I know better than typescript
- object to type literal `as const` property of obj can't changed
- ! after a value , **null assertion**
- **Narrowing**

  - truthiness
  - typof
  - instanceof
  - in for object
  - **type predicated** or **user defined type guard**

    ```ts
    function isFish(pet: Fish | Bird): pet is Fish {
      return (pet as Fish).swim !== undefined;
    }
    ```

    **ParameterName is Type**

  - **discriminated unions**

  ```ts
  interface Circle {
    kind: "circle";
    radius: number;
  }
  interface Square {
    kind: "square";
    sideLength: number;
  }
  type Shape = Circle | Square;
  function getArea(s: Shape) {
    if (s.kind === "circle") {
      s.radius;
    }
  }
  ```

- **never** In those cases, TypeScript will use a never type to represent a state which shouldn’t exist.

- **function types**

```ts
const fn: () => void;
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
type SomeConstructor = {
  new (s: string): SomeObject;
};
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}
```

- **Generic function**

It’s common to write a function where the types of the input relate to the type of the output, or where the types of two inputs are related in some way.

capturing the type of the argument

The type will inferred - chosen automatically - by TypeScript.

- **constraint** to limit the kinds of types that a type parameter can accept.
  We constrain the type parameter to that type by writing an **extends clause**.
  Remember extending interfaces? It is similar to that.

  > Rule: When possible, use the type parameter itself rather than constraining it

  - use fewer type parameter

  ```ts
  function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
    return arr.filter(func);
  }
  function filter2<Type, Func extends (arg: Type) => boolean>(arr: Type[], func: Func): Type[] {
    return arr.filter(func);
  }
  ```

  > Rule: Always use as few type parameters as possible

  > In JavaScript, if you call a function with more arguments than there are parameters, the extra arguments are simply ignored. TypeScript behaves the same way. **Functions with fewer parameters (of the same types) can always take the place of functions with more parameters.**
  >
  > When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument

  - **Function Overload**

  ```ts
  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  ```

  - **TypeScript can only resolve a function call to a single overload**

  ```ts
  function len(s: string): number;
  function len(arr: any[]): number;
  function len(x: any) {
    return x.length;
  }
  len(""); // OK
  len([0]); // OK
  len(Math.random() > 0.5 ? "hello" : [0]); // will not work

  // Better
  function len(x: any[] | string) {
    return x.length;
  }
  ```

  > Always prefer parameters with union types instead of overloads when possible

  - **Function with this signatrue**

  ```ts
  (this: User) => boolean;
  ```

  > Note that you need to use function and not arrow functions to get this behavior

- **void** represents the return value of functions which don’t return a value.

- The special type **object** refers to any value that isn’t a primitive

- **unknown** The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value

- **object**

  - `?` make the property optional
  - `readonly` property can't be written

  ```ts
  type Demo = {
    readonly a: number;
    readonly b: number[];
  };
  const d: Demo = {
    a: 1,
    b: [1, 2, 3],
  };
  d.a = 2; // can't write readony properties
  d.b.push(4); // It is okay not changing the value of b
  ```

- **index signature**
  - they enforce that all properties match their return type.

```ts
interface StringArray {
  [index: number]: string;
  a: string; // Ok
  b: number; // Error
}
// This index signature states that when a StringArray is indexed with a number, it will return a string.
```

- **The extends** keyword on an interface allows us to effectively copy members from other named types, and add whatever new members we want.

  > Can't extend multiple types if there is conflict

  ```ts
  interface Type2 {
    type: string;
  }
  interface Type1 {
    type: number;
  }
  interface Type3 extends Type1, Type2 {} // Error
  ```

  ```ts
  interface Type2 {
    type: string;
  }
  interface Type1 {
    type: number;
  }
  type Type3 = Type1 & Type2; // Can't work with it because {type: never}
  // Use interfaces, because it is better.
  ```

- **Intersection Types**
  TypeScript provides another construct called intersection types that is mainly used to combine existing object types.

- **Generic Interfaces and Types**

```ts
interface Box<Type> {
  contents: Type;
}
type Box<Type> = {
  contents: Type;
};
```

- **Generic Interfaces with generic functions**

- **ReadonlyArray<> readonly[]** values can't be changed

## Creating types from types

- **Creating types from **

- The **keyof operator** takes an **object type** and produces a string or numeric literal union of its keys.

- Index access type
  We can use an indexed access type to look up a specific property on another type

  ```ts
  type Person = { age: number; name: string; alive: boolean };
  type Age = Person["age"];
  type Age = Preson[string];
  ```

- **Conditional Types** Conditional types help describe the relation between the types of inputs and outputs.

```ts
  SomeType extends OtherType ? TrueType : FalseType;
```

When the type on the left of the extends is assignable to the one on the right

```ts
// can pass only objects which has the message prop
type MessageOf<T extends { message: unknown }> = T["message"];
// can pass anything
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
```

**Infer**

Conditional types provide us with a way to **infer** from types we compare against in the true branch using the infer keyword.

**Distributive Conditional Types**

When conditional types act on a **generic type**, they become distributive **when given a union** type.

```ts
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
```

Typically, distributivity is the desired behavior. **To avoid** that behavior, you can surround each side of the extends keyword with square brackets.

```ts
type ToArray<Type> = [Type] extends [any] ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
```

## Mapped Types

union me in use karo(in hindi).
Here `in` I can iterate over any thing but need to use `as` to find the final key

[P in keyof T]: T[P] // in with union
[P in K]: number // in string/number

**re-map** keys in mapped types with an `as clause` in a mapped type:

```ts
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property];
};
```

**You can filter out keys by producing never** via a conditional type

> You can map over arbitrary unions, not just unions of `string | number | symbol`, but unions of any type:
>
> ```ts
> type EventConfig<Events extends { kind: string }> = {
>   [E in Events as E["kind"]]: (event: E) => void;
> };
> type SquareEvent = { kind: "square"; x: number; y: number };
> type CircleEvent = { kind: "circle"; radius: number };
> type Config = EventConfig<SquareEvent | CircleEvent>;
> ```

## Template Literals

```ts
type World = "world";
type Greeting = `hello ${World}`;
```

**When a union is used in the interpolated position, the type is the set of every possible string literal that could be represented by each union member**

```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
```

Question

```ts
type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(
    eventName: `${Key}Changed`,
    callback: (newValue: Type[Key]) => void
  ): void;
};

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});

// makeWatchedObject has added `on` to the anonymous Object

person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
```

## declare

let typescript know this value exists(may be some other file has added to the global scope) trust me

```ts
declare let module: any;
declare const fooSdk: { doSomething: () => boolean };
```

// ------------Learning
// in with any unions in mapped types
// infer can only be used in the true expression
// indexed types: Type[number] or Type['prop']

// in with arrary
// P in arr[number]
// P in union
// P in kyeof Obj

// type Push<T extends unknown[], V> = T extends [...infer R] ? [...R,V] : never;
// since I already know its an array I can directly spread it

// type MyReturnType<F> = F extends (...args: any[]) => infer R ? R : never;
// type MyReturnType<F> = F extends (...args: unknown[]) => infer R ? R : never; // no functions can extends it
// can overwrite arg type but not return type

// ---default type is set using <Type = DefaltType>

// ---infer with array
// type Last<T extends unknown[]> = T extends [...infer R,infer L] ? L : never;
// type Shift<T extends unknown[]> = T extends [infer F,...infer R] ? R : never;
// Don't need any inference
// type A<T extends any[]> = T extends [...any[], infer L] ? L : never;

// ---infer with function
// type AppendArgument<F extends (...args: any[]) => unknown,T> =
// F extends (...args: infer A) => infer R ? (...args: [...A,T]) => R : never;
// array of types in the above case is good

// ---infer with template string
// type Trim<T extends string> = T extends ` ${infer V}` | `${infer V} ` ? Trim<V> : T;  
// type ReplaceAll<T extends string, F extends string, R extends string> =
// F extends '' ? T : T extends `${infer B}${F}${infer A}` ? `${B}${R}${ReplaceAll<A,F,R>}` : T ;
// If want to find something and replace don't go one char at a time rather first, rqChar, lase. Do like this
// Don't need any infernce? `a${string}` strings that starts with a

// ---infer with object
// type LookUp<T extends {type: string},K extends T["type"]> = T extends {type: infer V} ? V extends K ? T:never : never;
// infer was not necessary in the above example
// type LookUp<T extends {type: string},K extends T["type"]> = T extends {type: K} ? T:never;

// ---interestring things about never type
// never is not counted in union
// [never] -> doomed on one extends it except for [never];
// {a: never} // doomed

// ---T[number] in array gives type of each element if it is readonly or const
// when duplicay matters number won't work [a,b,c,d,a] -> [a,b,c,d]

// ---------Mistakes
// T is a type {T: any} // not valid need to use mapped types {[P in T]: any}

// PropertyKey type string | number | symbol

// --- loops in typescript
// 1. generic union
// 2. [p in union]

// --------Doubts
// Why do i need to create empty object? Why {} doesn't work??
// type EmptyObject = {
// [key in string]: never;
// };
// type falsyValues = '' | 0 | false | EmptyObject | null | undefined | [];
// Why its return type is not boolean?? true | false . because for each value in the union will return either true or false. so why it's type is not like true | false/
// type AnyOf<T extends any[]> = T[number] extends falsyValues ? false : true;

// ----Minus-one don't know why it is showing infinite loop

// Here inside the array extends constraint type
// Bas = ke bad bahar extends will act as if

```ts
type Join<T extends string[], S extends string | number> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? R extends []
    ? F
    : `${F}${S}${Join<R, S>}`
  : "";
```

// Need to search

```ts
// generics -> constraint
<T extends string>
// in array
[...infer S extends string[]]
// in object
type S<T> = {
    a: T extends string ? string : number;
}
// in mapped types aliases
[ as T extends ]

// Is it possible??????????
function a<T>(p: T extends number ? number : never) : T extends;
```

// How it merging is happeding??

```ts
type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };
type check = MapTypes<{ iWillBeNumberOrDate: string }, StringToDate | StringToNumber>; // gives { iWillBeNumberOrDate: number | Date; }StringToNumber>;
// gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
type MapTypes<
  T,
  U extends {
    mapFrom: any;
    mapTo: any;
  }
> = {
  [P in keyof T]: T[P] extends U["mapFrom"] ? U["mapTo"] : T[P];
};
```

--- Function with generic arguments
--- ThisType

## Things to learn

- assert in typescript
- classes in typescript
- custom errors in typescript
- error message in typescript

// Loose type with typescript

```ts
// Will loose auto complete.
type TSize = "sm" | "lg" | string;

// Will not loose auto complete
type TLooselySize = "sm" | "lg" | Omit<string, "sm" | "lg">;
```
