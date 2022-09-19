// ******** The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.

// For example, the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.

// Implement BEM<B, E, M> which generate string union from these three parameters. Where B is a string literal, E and M are string arrays (can be empty).

// type BEM<B extends string, E extends string[], M extends string[]> = B extends ""
//   ? never
//   : E[number] extends infer CE extends string
//   ? M[number] extends infer CM extends string
//     ? `${B}__${CE}--${CM}`
//     : `${B}__${CE}`
//   : `${B}`;

type c = BEM<"block", [], []>;

// type BEM<
//   B extends string,
//   E extends string[],
//   M extends string[]
// > = `${B}__${E[number]}--${M[number]}`;

// ** The best

type IsNever<T> = [T] extends [never] ? true : false;
// Is Union Check and Is never Check
type IsUnion<U> = IsNever<U> extends true ? "" : U;
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${IsUnion<`__${E[number]}`>}${IsUnion<`--${M[number]}`>}`;
