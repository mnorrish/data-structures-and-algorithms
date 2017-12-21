import selectionSort, { indexOfMin } from '.';

describe('indexOfMin', () => {
  it('returns the index of the first occurence of the minimum number in the given array', () => {
    expect(indexOfMin([3, 2, 6, 1, 9, 6])).toBe(3);
    expect(indexOfMin([3, 2, 2])).toBe(1);
  });
});

describe('selectionSort', () => {
  it('returns a correctly sorted array of numbers', () => {
    expect(selectionSort([3, 2, 6, 1, 9, 6])).toEqual([1, 2, 3, 6, 6, 9]);
  });
});
