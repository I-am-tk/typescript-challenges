type Trunc<S extends string | number> = `${S}` extends `${infer R}.${infer U}` ? R : `${S}`;
