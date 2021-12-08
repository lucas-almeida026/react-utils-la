export declare function handlePromise<ResultType>(p: Promise<ResultType>, callback?: Function): Promise<[ResultType | null, Error | null]>;
export declare const handlePromiseChain: (...p: Promise<any>[]) => Promise<[any, any]>;
//# sourceMappingURL=index.d.ts.map