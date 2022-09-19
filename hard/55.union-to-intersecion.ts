type I = Union2Intersection<"foo" | 42 | true>; // expected to be 'foo' & 42 & true

// ## Solve this
