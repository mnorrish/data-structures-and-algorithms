"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(left, right) {
    var result = [];
    var leftLast = left[left.length - 1];
    var rightLast = right[right.length - 1];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        var leftValue = left[leftIndex];
        var rightValue = right[rightIndex];
        if (leftLast <= rightValue) {
            // if remainder of left inserts before next right
            result.push.apply(result, left.slice(leftIndex));
            leftIndex = left.length;
        }
        else if (rightLast < leftValue) {
            // if remainder or right inserts before next left
            result.push.apply(result, right.slice(rightIndex));
            rightIndex = right.length;
        }
        else if (leftValue < rightValue) {
            // if next left inserts before next right
            result.push(leftValue);
            leftIndex++;
        }
        else {
            // if next right inserts before next left
            result.push(rightValue);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
exports.merge = merge;
function split(array) {
    var middleIndex = Math.floor(array.length / 2);
    return [
        array.slice(0, middleIndex),
        array.slice(middleIndex),
    ];
}
exports.split = split;
function mergeSort(array) {
    if (array.length <= 1)
        return array;
    var _a = split(array), left = _a[0], right = _a[1];
    return merge(mergeSort(left), mergeSort(right));
}
exports.default = mergeSort;
