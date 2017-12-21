"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('split', function () {
    it('splits given array in half', function () {
        expect(_1.split([])).toEqual([[], []]);
        expect(_1.split([1])).toEqual([[], [1]]);
        expect(_1.split([1, 2])).toEqual([[1], [2]]);
        expect(_1.split([1, 2, 3])).toEqual([[1], [2, 3]]);
        expect(_1.split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
        expect(_1.split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
    });
});
describe('merge', function () {
    it('merges given sorted arrays correctly', function () {
        expect(_1.merge([2], [1])).toEqual([1, 2]);
        expect(_1.merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
        expect(_1.merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
        expect(_1.merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
        expect(_1.merge([2, 3, 5, 6, 7], [1, 4, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
describe('mergeSort', function () {
    it('returns a correctly sorted array of numbers', function () {
        expect(_1.default([3, 2, 6, 1, 9, 6])).toEqual([1, 2, 3, 6, 6, 9]);
    });
});
