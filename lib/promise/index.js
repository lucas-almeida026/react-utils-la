"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlePromiseChain = exports.handlePromise = void 0;
function handlePromise(p, callback) {
    return new Promise((res, _) => {
        p.then((r) => res([r, null]))
            .catch((err) => res([null, err]))
            .finally(() => callback ? callback() : null);
    });
}
exports.handlePromise = handlePromise;
const handlePromiseChain = (...p) => new Promise((res, _) => {
    Promise.all(p).then(results => res([results, null]))
        .catch(errors => res([null, errors]));
});
exports.handlePromiseChain = handlePromiseChain;
// export const handlePromiseChain = (...p: Promise<any>[]) => {
//   return new Promise<[any | null, Error[] | null]>((res, _) => {
//     Promise.all(p).then((results: any) => res([results, null]))
//     .catch((errors: Error[]) => res([null, errors as Error[]]))
//   })
// }
//# sourceMappingURL=index.js.map