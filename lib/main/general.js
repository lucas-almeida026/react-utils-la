"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderArrayOfObjects = exports.exists = exports.createDebounce = exports.removeEmptyAttributes = void 0;
const removeEmptyAttributes = (obj) => Object.fromEntries(Object.entries(obj).filter(([key, val]) => val !== undefined && val !== '' && val !== null));
exports.removeEmptyAttributes = removeEmptyAttributes;
function createDebounce() {
    let timer;
    return (fn, timeInMS) => {
        clearTimeout(timer);
        timer = setTimeout(fn, timeInMS);
    };
}
exports.createDebounce = createDebounce;
const exists = (item) => {
    if (typeof item === 'object') {
        return item !== null && item !== undefined && (Object.keys(item).length > 0 || (!!item.length && item.length > 0));
    }
    return item !== null && item !== undefined;
};
exports.exists = exists;
const orderArrayOfObjects = (arrayOfObjects) => {
    function by(key) {
        return {
            asc: () => asc(key),
            desc: () => desc(key)
        };
    }
    function asc(key) {
        return arrayOfObjects.sort((a, b) => {
            if (a[key] < b[key])
                return -1;
            if (a[key] > b[key])
                return 1;
            return 0;
        });
    }
    function desc(key) {
        return arrayOfObjects.sort((a, b) => {
            if (b[key] < a[key])
                return -1;
            if (b[key] > a[key])
                return 1;
            return 0;
        });
    }
    return {
        by: (key) => by(key)
    };
};
exports.orderArrayOfObjects = orderArrayOfObjects;
//# sourceMappingURL=general.js.map