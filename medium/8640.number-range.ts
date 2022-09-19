// ### Do
type result = NumberRange<2, 9>; //  | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type NumberRange<
  L extends number,
  H extends number,
  R extends any[] = [],
  F extends boolean = R["length"] extends L ? true : false
> = F extends true
  ? H extends R["length"]
    ? [...R, R["length"]][number]
    : NumberRange<L, H, [...R, R["length"]], F>
  : NumberRange<L, H, [...R, never]>;

// type NumberRange<
//   L,
//   H,
//   Count extends any[] = [],
//   Res extends any[] = [],
//   Flag extends boolean = Count["length"] extends L ? true : false
// > = Flag extends true
//   ? Count["length"] extends H
//     ? [...Res, Count["length"]][number]
//     : NumberRange<L, H, [...Count, ""], [...Res, Count["length"]], Flag>
//   : NumberRange<L, H, [...Count, ""]>;
