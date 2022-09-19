// ****  Given a number (always positive) as a type. Your type should return the number decreased by one.

type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<54>; // 54

type Pop<T extends any[]> = T extends [...infer _F, ...infer R] ? R : never;
type NumToArr<T extends number, A extends any[] = []> = T extends A["length"]
  ? A
  : NumToArr<T, ["", ...A]>;

type MinusOne<T extends number> = NumToArr<T>;
