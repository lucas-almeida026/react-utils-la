export declare const objectMap: <T extends object>(object: T, fn: (key: keyof T, value: any) => any) => { [k in keyof T]: any; };
export declare const objectFilter: <T extends object>(object: T, fn: (key: keyof T, value: any) => boolean) => Partial<T>;
//# sourceMappingURL=objects.d.ts.map