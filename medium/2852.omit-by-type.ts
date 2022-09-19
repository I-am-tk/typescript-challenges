// From T, pick a set of properties whose type are not assignable to U.

type OmitBoolean = OmitByType<
  {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  },
  boolean
>; // { name: string; count: number }

type OmitByType<O, T> = {
  [Key in keyof O as O[Key] extends T ? never : Key]: O[Key];
};
