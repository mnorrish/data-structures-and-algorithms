import quickSort from '.';

it('returns a correctly sorted array of numbers', () => {
  expect(quickSort([3, 2, 6, 1, 9])).toEqual([1, 2, 3, 6, 9]);
});
