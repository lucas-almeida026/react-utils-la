"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLanguages = void 0;
const withLanguages = (languages) => {
    const memo = {};
    const resultObj = {
        ...reduceDefault(),
        join
    };
    function reduceDefault() {
        return Object.keys(languages).reduce((acc, curr) => {
            const result = {};
            result[curr] = addText(languages[curr]);
            return { ...acc, ...result };
        }, {});
    }
    function addText(lang) {
        return (value) => {
            memo[lang] = value;
            return resultObj;
        };
    }
    function join() { return memo; }
    return resultObj;
};
exports.withLanguages = withLanguages;
//# sourceMappingURL=index.js.map