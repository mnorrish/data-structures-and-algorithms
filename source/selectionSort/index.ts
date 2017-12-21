export type nums = number[];

export function indexOfMin([first, ...rest]: nums): number {
  let min = first;
  return rest.reduce((minIndex, n, index) => {
    if (n < min) {
      min = n;
      return index + 1;
    }
    return minIndex;
  }, 0);
}

export default function selectionSort(array: nums): nums {
  let place = 0;
  let nextMinIndex = indexOfMin(array);
  let result = [...array];

  while (place < array.length) {
    // get the next value and next min value
    const { [place]: next, [nextMinIndex]: nextMin } = result;

    // swap the values in the result array if the next value is less than the next min value
    if (next > nextMin) {
      [result[nextMinIndex], result[place]] = [next, nextMin];
    }

    // find the indexes for the next iteration
    place++;
    nextMinIndex = indexOfMin(result.slice(place)) + place;
  }

  return result;
}
