export declare function handlePromise<PromiseType>(p: Promise<PromiseType>, callback?: Function): Promise<[PromiseType | null, Error | null]>;
export declare const handlePromiseChain: (...p: Promise<any>[]) => Promise<[any, any]>;
//# sourceMappingURL=index.d.ts.map