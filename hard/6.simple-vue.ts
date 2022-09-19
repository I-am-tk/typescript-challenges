const instance = SimpleVue({
  data() {
    return {
      firstname: "Type",
      lastname: "Challenges",
      amount: 10,
    };
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    hi() {},
  },
  methods: {
    hi() {
      alert(this.fullname.toLowerCase());
    },
  },
});

// type GetComputed<T> = {
//   [Key in keyof T]: T[Key] extends () => infer R ? R : never;
// };

// type Options<TData, TComputed, TMethods> = {
//   data: (this: void) => TData;
//   computed: TComputed & ThisType<TData>;
//   methods: TMethods & ThisType<TData> & GetComputed<TComputed & TMethods>;
// };

// declare function SimpleVue<TData, TComputed, TMethods>(
//   options: Options<TData, TComputed, TMethods>
// ): unknown;

// Function with generic arguments??

type GetComputed<TComputed> = {
  [key in keyof TComputed]: TComputed[key] extends () => infer Result ? Result : never;
};

type Options<TData, TComputed, TMethods> = {
  data: (this: void) => TData;
  computed: TComputed & ThisType<TData>;
  methods: TMethods & ThisType<TData & GetComputed<TComputed> & TMethods>;
};

declare function SimpleVue<TData, TComputed, TMethods>(
  options: Options<TData, TComputed, TMethods>
): unknown;
