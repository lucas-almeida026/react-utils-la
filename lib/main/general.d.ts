export declare const removeEmptyAttributes: (obj: any) => {
    [k: string]: unknown;
};
export declare function createDebounce(): (fn: Function, time: number) => void;
export declare const exists: (item: any) => boolean;
export declare const orderArrayOfObjects: <T extends object>(objArr: T[]) => {
    by: (key: keyof T) => {
        asc: () => T[];
        desc: () => T[];
    };
};
//# sourceMappingURL=general.d.ts.map