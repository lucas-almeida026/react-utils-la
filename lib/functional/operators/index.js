"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = exports._ifElse = exports._if = exports.gte = exports.gt = exports.lte = exports.lt = exports.modP = exports.reduce = exports.filter = exports.map = void 0;
const lodash_1 = require("lodash");
const map = (fn) => (xs) => xs.map(fn);
exports.map = map;
const filter = (fn) => (xs) => xs.filter(fn);
exports.filter = filter;
const reduce = (fn) => (xs) => xs.reduce(fn);
exports.reduce = reduce;
const modP = (x) => (y) => ((y % x) + x) % x;
exports.modP = modP;
const lt = (ref) => (value) => value < ref;
exports.lt = lt;
const lte = (ref) => (value) => value <= ref;
exports.lte = lte;
const gt = (ref) => (value) => value > ref;
exports.gt = gt;
const gte = (ref) => (value) => value >= ref;
exports.gte = gte;
const _if = (condition) => (trueCase) => {
    if (condition)
        trueCase();
};
exports._if = _if;
const _ifElse = (condition) => (trueCase) => (falseCase) => condition ? trueCase() : falseCase();
exports._ifElse = _ifElse;
const equals = (x) => (y) => {
    return (0, lodash_1.isEqual)(x, y);
};
exports.equals = equals;
//# sourceMappingURL=index.js.map