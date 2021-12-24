"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectConcat = exports.objectSome = exports.objectEvery = exports.objectLength = exports.objectFilter = exports.objectMap = void 0;
const objectMap = (object, fn) => {
    const entries = Object.entries(object);
    const mapped = entries.map(([key, value], index, entries) => [key, fn(key, value, index, entries)]);
    return Object.fromEntries(mapped);
};
exports.objectMap = objectMap;
const objectFilter = (object, fn) => {
    const entries = Object.entries(object);
    const filtered = entries.filter(([key, value], index, entries) => fn(key, value, index, entries));
    return Object.fromEntries(filtered);
};
exports.objectFilter = objectFilter;
const objectLength = (baseObject) => Object.entries(baseObject).length;
exports.objectLength = objectLength;
const objectEvery = (object, fn) => {
    const entries = Object.entries(object);
    return entries.every(([key, value], index, entries) => fn(key, value, index, entries));
};
exports.objectEvery = objectEvery;
const objectSome = (object, fn) => {
    const entries = Object.entries(object);
    return entries.some(([key, value], index, entries) => fn(key, value, index, entries));
};
exports.objectSome = objectSome;
const objectConcat = (a, b) => {
    return { ...a, ...b };
};
exports.objectConcat = objectConcat;
//# sourceMappingURL=index.js.map