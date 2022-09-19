type StringToNumber = { mapFrom: string; mapTo: number };
type StringToDate = { mapFrom: string; mapTo: Date };
type check = MapTypes<{ iWillBeNumberOrDate: string | boolean }, StringToDate | StringToNumber>; // gives { iWillBeNumberOrDate: number | Date; }StringToNumber>;
// gives { iWillBeANumberOneDay: number, iWillStayTheSame: Function }
// type MapTypes<
//   T,
//   U extends {
//     mapFrom: any;
//     mapTo: any;
//   }
// > = {
//   [P in keyof T]: T[P] extends U["mapFrom"] ? U["mapTo"] : T[P];
// };

// making sure for never types
type MapTypes<T, R extends { mapFrom: any; mapTo: any }> = {
  [K in keyof T]: T[K] extends R["mapFrom"]
    ? R extends { mapFrom: T[K] }
      ? R["mapTo"]
      : never
    : T[K];
};
