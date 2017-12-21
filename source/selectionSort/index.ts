type nums = number[];

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
    const { [place]: placeValue, [nextMinIndex]: nextMinValue } = result;

    if (nextMinValue < placeValue) {
      [result[nextMinIndex], result[place]] = [placeValue, nextMinValue];
    }

    place++;
    nextMinIndex = indexOfMin(result.slice(place)) + place;
  }

  return result;
}
