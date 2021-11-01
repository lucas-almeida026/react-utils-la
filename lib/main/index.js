"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePromise = void 0;
const handlePromise = p => new Promise((res, _) => p.then(r => res([r, null])).catch(err => res([null, err])));
exports.handlePromise = handlePromise;
//# sourceMappingURL=index.js.map