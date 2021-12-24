"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vw = exports.vh = exports.flexRow = exports.flexColumn = exports.stackFlexRow = exports.stackFlexColumn = void 0;
const stackFlexColumn = (horizontalAlignment = 'center', verticalAlginment = 'center') => ({
    direction: "column",
    justifyContent: verticalAlginment,
    alignItems: horizontalAlignment
});
exports.stackFlexColumn = stackFlexColumn;
const stackFlexRow = (horizontalAlignment = 'center', verticalAlginment = 'center') => ({
    direction: "row",
    justifyContent: horizontalAlignment,
    alignItems: verticalAlginment
});
exports.stackFlexRow = stackFlexRow;
const flexColumn = (horizontalAlignment = 'center', verticalAlginment = 'center') => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: verticalAlginment,
    alignItems: horizontalAlignment
});
exports.flexColumn = flexColumn;
const flexRow = (horizontalAlignment = 'center', verticalAlginment = 'center') => ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: horizontalAlignment,
    alignItems: verticalAlginment
});
exports.flexRow = flexRow;
const vh = (value) => Math.ceil(window.innerHeight / 100 * value);
exports.vh = vh;
const vw = (value) => Math.ceil(window.innerWidth / 100 * value);
exports.vw = vw;
//# sourceMappingURL=index.js.map