declare type LanguagesResult<T> = {
    [key in keyof T]: string | string[];
};
declare type LanguagesFunctions<T> = {
    [key in keyof T]: (value: string | string[]) => LanguagesFunctions<T> & {
        join: () => LanguagesResult<T>;
    };
};
declare type LanguagesReturn<T> = LanguagesFunctions<T> & {
    join: () => LanguagesResult<T>;
};
export declare const withLanguages: <T extends object>(languages: T) => LanguagesReturn<T>;
export {};
//# sourceMappingURL=index.d.ts.map