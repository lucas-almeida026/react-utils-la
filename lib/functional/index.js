"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.id = exports.k = exports.pipe = void 0;
__exportStar(require("./operators"), exports);
const pipe = (...fns) => (x) => fns.reduce((res, fn) => fn(res), x);
exports.pipe = pipe;
const k = (x) => (y) => x;
exports.k = k;
const id = (x) => x;
exports.id = id;
//# sourceMappingURL=index.js.map