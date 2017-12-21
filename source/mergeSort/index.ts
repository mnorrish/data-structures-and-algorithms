export type nums = number[];

export function merge(left: nums, right: nums): nums {
  const result = [];
  const leftLast = left[left.length - 1];
  const rightLast = right[right.length - 1];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftValue = left[leftIndex];
    const rightValue = right[rightIndex];

    if (leftLast <= rightValue) {
      // if remainder of left inserts before next right
      result.push(...left.slice(leftIndex));
      leftIndex = left.length;
    } else if (rightLast < leftValue) {
      // if remainder or right inserts before next left
      result.push(...right.slice(rightIndex));
      rightIndex = right.length;
    } else if (leftValue < rightValue) {
      // if next left inserts before next right
      result.push(leftValue);
      leftIndex++;
    } else {
      // if next right inserts before next left
      result.push(rightValue);
      rightIndex++;
    }
  }

  return [
    ...result,
    ...left.slice(leftIndex),
    ...right.slice(rightIndex),
  ];
}

export function split<T>(array: Array<T>): Array<T>[] {
  const middleIndex = Math.floor(array.length / 2);

  return [
    array.slice(0, middleIndex),
    array.slice(middleIndex),
  ];
}

export default function mergeSort(array: nums): nums {
  if (array.length <= 1) return array;

  const [left, right] = split(array);
  
  return merge(mergeSort(left), mergeSort(right));
}
