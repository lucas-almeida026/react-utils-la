"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectFromDeepEntries = exports.objectDeepEntries = exports.objectDepth = exports.isObject = exports.objectConcat = exports.objectSome = exports.objectEvery = exports.objectLength = exports.objectFilter = exports.objectMap = void 0;
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
const objectLength = (baseObject) => Object.keys(baseObject).length;
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
const isObject = (val) => val instanceof Object && !(val instanceof Array);
exports.isObject = isObject;
const isArray = (val) => val instanceof Array;
const objectDepth = (o) => {
    const values = Object.values(o);
    const objectChildrens = values.filter(val => (0, exports.isObject)(val));
    if (objectChildrens.length > 0) {
        return 1 + Math.max(...objectChildrens.map(child => (0, exports.objectDepth)(child)));
    }
    return 1;
};
exports.objectDepth = objectDepth;
const objectDeepEntries = (o) => {
    if ((0, exports.objectDepth)(o) * (0, exports.objectLength)(o) > 100) {
        console.warn(`Preventing maximum call stack size error for object deepEntriesObject`);
        return [];
    }
    const entries = Object.entries(o);
    return entries.map(([key, value]) => ([key, ((0, exports.isObject)(value) ? [...(0, exports.objectDeepEntries)(value)] : value)]));
};
exports.objectDeepEntries = objectDeepEntries;
const objectFromDeepEntries = (arr) => {
    const entries = Object.fromEntries(arr);
    return (0, exports.objectMap)(entries, (_, value) => {
        if (isArray(value) && value.every((el) => isArray(el))) {
            return (0, exports.objectFromDeepEntries)(value);
        }
        return value;
    });
};
exports.objectFromDeepEntries = objectFromDeepEntries;
//# sourceMappingURL=index.js.map