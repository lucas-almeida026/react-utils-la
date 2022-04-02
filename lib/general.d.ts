export declare const isNullable: (value: any) => value is null;
export declare const exists: (item: any) => boolean;
export declare const orderArrayOfObjects: <T extends object>(arrayOfObjects: T[]) => {
    by: (key: keyof T) => {
        asc: () => T[];
        desc: () => T[];
    };
};
//# sourceMappingURL=general.d.ts.map