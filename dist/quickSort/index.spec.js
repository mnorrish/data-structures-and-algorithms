"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('splitOnPivot', function () {
    it('splits given array into <= and > arrays based on the given pivot value', function () {
        expect(_1.splitOnPivot(0, [3, 2, 6])).toEqual([[], [3, 2, 6]]);
        expect(_1.splitOnPivot(6, [3, 2, 6])).toEqual([[3, 2, 6], []]);
        expect(_1.splitOnPivot(5, [3, 2, 6, 1, 5, 9, 7])).toEqual([[3, 2, 1, 5], [6, 9, 7]]);
    });
});
describe('quickSort', function () {
    it('returns a correctly sorted array of numbers', function () {
        expect(_1.default([3, 2, 6, 1, 9, 6])).toEqual([1, 2, 3, 6, 6, 9]);
    });
});
