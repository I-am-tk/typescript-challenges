const add = (a: number, b: string, c: boolean) => b;
const curriedAdd = Currying(add);
const five = curriedAdd(2)("b");

// type CurriedFunction<F extends (...args: any[]) => unknown, CurArg extends any[] = []> = F extends (
//   ...args: infer A
// ) => infer R
//   ? CurArg["length"] extends A["length"]
//     ? R
//     : (arg: A[CurArg["length"]]) => CurriedFunction<F, [...CurArg, unknown]>
//   : never;

// declare function Currying<F extends (...args: any[]) => unknown>(add: F): CurriedFunction<F>;

type Impl<Fn> = Fn extends (...args: infer Args) => infer R
  ? Args extends [infer F, ...infer Rest]
    ? (k: F) => Impl<(...args: Rest) => R>
    : R
  : never;

declare function Currying<Fn>(fn: Fn): Impl<Fn>;
