"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderArrayOfObjects = exports.exists = exports.isNil = void 0;
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const isNil = (value) => value === null || value === undefined;
exports.isNil = isNil;
const exists = (item) => {
    if (item instanceof Object && !(item instanceof Array)) {
        return !(0, exports.isNil)(item) && !(0, lodash_isequal_1.default)(item, {});
    }
    else if (item instanceof Array) {
        return !(0, exports.isNil)(item) && !(0, lodash_isequal_1.default)(item, []);
    }
    return !(0, exports.isNil)(item);
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