import mergeSort, { merge } from '.';

describe('merge', () => {
  it('merges given sorted arrays correctly', () => {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([3, 4], [1, 2])).toEqual([1, 2, 3, 4]);
    expect(merge([1, 4], [2, 3])).toEqual([1, 2, 3, 4]);
  });
});

describe('mergeSort', () => {
  it('returns a correctly sorted array of numbers', () => {
    expect(mergeSort([3, 2, 6, 1, 9])).toEqual([1, 2, 3, 6, 9]);
  });
});
