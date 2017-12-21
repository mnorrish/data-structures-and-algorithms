"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('indexOfMin', function () {
    it('returns the index of the first occurence of the minimum number in the given array', function () {
        expect(_1.indexOfMin([3, 2, 6, 1, 9, 6])).toBe(3);
        expect(_1.indexOfMin([3, 2, 2])).toBe(1);
    });
});
describe('selectionSort', function () {
    it('returns a correctly sorted array of numbers', function () {
        expect(_1.default([3, 2, 6, 1, 9, 6])).toEqual([1, 2, 3, 6, 6, 9]);
    });
});
