"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitOnPivot(pivot, array) {
    return array.reduce(function (memo, n) {
        memo[n <= pivot ? 0 : 1].push(n);
        return memo;
    }, [[], []]);
}
exports.splitOnPivot = splitOnPivot;
function quickSort(array) {
    if (array.length <= 1)
        return array;
    var pivot = array[0], values = array.slice(1);
    var _a = splitOnPivot(pivot, values), lte = _a[0], gt = _a[1];
    return quickSort(lte).concat([pivot], quickSort(gt));
}
exports.default = quickSort;
