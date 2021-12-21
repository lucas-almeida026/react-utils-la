"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectLength = exports.objectFilter = exports.objectMap = void 0;
const objectMap = (object, fn) => {
    const entries = Object.entries(object);
    const mapped = entries.map((e) => [e[0], fn(e[0], e[1])]);
    return Object.fromEntries(mapped);
};
exports.objectMap = objectMap;
const objectFilter = (object, fn) => {
    const entries = Object.entries(object);
    const filtered = entries.filter((e) => fn(e[0], e[1]));
    return Object.fromEntries(filtered);
};
exports.objectFilter = objectFilter;
const objectLength = (baseObject) => Object.entries(baseObject).length;
exports.objectLength = objectLength;
//# sourceMappingURL=objects.js.map