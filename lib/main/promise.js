"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePromiseChain = exports.handlePromise = void 0;
const handlePromise = p => new Promise((res, _) => p.then(r => res([r, null])).catch(err => res([null, err])));
exports.handlePromise = handlePromise;
const handlePromiseChain = (...p) => new Promise((res, _) => {
    Promise.all(p).then(results => res([results, null]))
        .catch(errors => res([null, errors]));
});
exports.handlePromiseChain = handlePromiseChain;
//# sourceMappingURL=promise.js.map