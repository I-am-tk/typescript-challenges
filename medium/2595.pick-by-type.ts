// From T, pick a set of properties whose type are assignable to U.

type OnlyBoolean = PickByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  number
>; // { isReadonly: boolean; isEnable: boolean; }

type PickByType<T, U> = {
  [Key in keyof T as T[Key] extends U ? Key : never]: T[Key];
};
