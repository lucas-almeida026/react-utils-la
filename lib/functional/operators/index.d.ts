export declare const map: (fn: (value: any, index: number, array: any[]) => unknown) => (xs: any[]) => unknown[];
export declare const filter: (fn: (value: any, index: number, array: any[]) => unknown) => (xs: any[]) => any[];
export declare const reduce: (fn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any) => (xs: any[]) => any;
export declare const modP: (x: number) => (y: number) => number;
export declare const lt: (ref: number) => (value: number) => boolean;
export declare const lte: (ref: number) => (value: number) => boolean;
export declare const gt: (ref: number) => (value: number) => boolean;
export declare const gte: (ref: number) => (value: number) => boolean;
export declare const _if: (condition: boolean) => (trueCase: Function) => void;
export declare const _ifElse: (condition: boolean) => (trueCase: Function) => (falseCase: Function) => any;
export declare const equals: (x: any) => (y: any) => boolean;
//# sourceMappingURL=index.d.ts.map