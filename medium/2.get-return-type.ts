// Implement the built-in ReturnType<T> generic without using it.

const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type a = MyReturnType<typeof fn>; // should be "1 | 2"

type MyReturnType<T extends (...args: any[]) => unknown> = T extends (...args: unknown[]) => infer R
  ? R
  : never;
