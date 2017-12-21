"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function indexOfMin(_a) {
    var first = _a[0], rest = _a.slice(1);
    var min = first;
    return rest.reduce(function (minIndex, n, index) {
        if (n < min) {
            min = n;
            return index + 1;
        }
        return minIndex;
    }, 0);
}
exports.indexOfMin = indexOfMin;
function selectionSort(array) {
    var place = 0;
    var nextMinIndex = indexOfMin(array);
    var result = array.slice();
    while (place < array.length) {
        // get the next value and next min value
        var _a = place, next = result[_a], _b = nextMinIndex, nextMin = result[_b];
        // swap the values in the result array if the next value is less than the next min value
        if (next > nextMin) {
            _c = [next, nextMin], result[nextMinIndex] = _c[0], result[place] = _c[1];
        }
        // find the indexes for the next iteration
        place++;
        nextMinIndex = indexOfMin(result.slice(place)) + place;
    }
    return result;
    var _c;
}
exports.default = selectionSort;
