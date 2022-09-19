// Replace the `camelCase` or `PascalCase` string with kebab-case.

// FooBarBaz -> foo-bar-baz

type camelCase = KebabCase<"camelCase">;

type PascalCase = KebabCase<"PascalCase">;

type DoNothing = KebabCase<"do-nothing">;

// ******  Brilliant

type KebabCase<Str extends string> = Str extends `${infer First}${infer Other}`
  ? Other extends Uncapitalize<Other>
    ? `${Lowercase<First>}${KebabCase<Other>}`
    : `${Lowercase<First>}-${KebabCase<Other>}`
  : Str;
