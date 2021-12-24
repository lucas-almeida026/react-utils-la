export declare const objectMap: <InputType extends object, OutputType extends object>(object: InputType, fn: (key: keyof InputType, value: any, index: number, entries: [string, any][]) => any) => OutputType;
export declare const objectFilter: <InputType extends object>(object: InputType, fn: (key: keyof InputType, value: any, index: number, entries: [string, any][]) => boolean) => Partial<InputType>;
export declare const objectLength: (baseObject: object) => number;
export declare const objectEvery: <InputType extends object>(object: InputType, fn: (key: keyof InputType, value: any, index: number, entries: [string, any][]) => boolean) => boolean;
export declare const objectSome: <InputType extends object>(object: InputType, fn: (key: keyof InputType, value: any, index: number, entries: [string, any][]) => boolean) => boolean;
export declare const objectConcat: <A extends object, B extends object>(a: A, b: B) => A & B;
//# sourceMappingURL=index.d.ts.map