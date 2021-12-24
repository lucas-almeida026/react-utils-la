export declare const isNil: (value: any) => boolean;
export declare const exists: (item: any) => boolean;
export declare const orderArrayOfObjects: <T extends object>(arrayOfObjects: T[]) => {
    by: (key: keyof T) => {
        asc: () => T[];
        desc: () => T[];
    };
};
//# sourceMappingURL=general.d.ts.map