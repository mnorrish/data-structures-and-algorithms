type nums = number[];

export function merge(left: nums, right: nums): nums {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex++]);
    } else {
      result.push(right[rightIndex++]);
    }
  }

  return [
    ...result,
    ...left.slice(leftIndex),
    ...right.slice(rightIndex),
  ];
}

export default function mergeSort(array: nums): nums {
  if (array.length <= 1) return array;

  const middleIndex = Math.floor(array.length / 2);

  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);
  
  return merge(mergeSort(left), mergeSort(right));
}
