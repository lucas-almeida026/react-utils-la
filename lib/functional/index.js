"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = exports.k = exports.pipe = void 0;
const pipe = (...fns) => (x) => fns.reduce((res, fn) => fn(res), x);
exports.pipe = pipe;
const k = (x) => (y) => x;
exports.k = k;
const id = (x) => x;
exports.id = id;
//# sourceMappingURL=index.js.map