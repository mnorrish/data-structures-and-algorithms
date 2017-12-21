type nums = number[];
type pivotResult = [nums, nums];

export function splitOnPivot(pivot: number, array: nums): pivotResult {
  return array.reduce<pivotResult>((memo, n) => {
      memo[n <= pivot ? 0 : 1].push(n);
      return memo;
  }, [[], []]);
}

export default function quickSort(array: nums): nums {
  if (array.length <= 1) return array;
  
  const [pivot, ...values] = array;
  const [lte, gt] = splitOnPivot(pivot, values);
  
  return [...quickSort(lte), pivot, ...quickSort(gt)];
}
