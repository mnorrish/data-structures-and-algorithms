import quickSort, { splitOnPivot } from '.';

describe('splitOnPivot', () => {
  it('splits given array into <= and > arrays based on the given pivot value', () => {
    expect(splitOnPivot(0, [3, 2, 6])).toEqual([[], [3, 2, 6]]);
    expect(splitOnPivot(6, [3, 2, 6])).toEqual([[3, 2, 6], []]);
    expect(splitOnPivot(5, [3, 2, 6, 1, 5, 9, 7])).toEqual([[3, 2, 1, 5], [6, 9, 7]]);
  });
});

describe('quickSort', () => {
  it('returns a correctly sorted array of numbers', () => {
    expect(quickSort([3, 2, 6, 1, 9])).toEqual([1, 2, 3, 6, 9]);
  });
});
