import mergeSort, { split, merge } from '.';

describe('split', () => {
  it('splits given array in half', () => {
    expect(split([])).toEqual([[], []])
    expect(split([1])).toEqual([[], [1]]);
    expect(split([1, 2])).toEqual([[1], [2]]);
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe('merge', () => {
  it('merges given sorted arrays correctly', () => {
    expect(merge([2], [1])).toEqual([1, 2]);
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
    expect(merge([2, 3, 5, 6, 7], [1, 4, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});

describe('mergeSort', () => {
  it('returns a correctly sorted array of numbers', () => {
    expect(mergeSort([3, 2, 6, 1, 9, 6])).toEqual([1, 2, 3, 6, 6, 9]);
  });
});
