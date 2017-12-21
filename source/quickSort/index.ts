type nums = number[];

export default function quickSort(arr: nums): nums {
  if (!arr.length) return [];
  
  const [pivot, ...values] = arr;

  const { lte, gt } = values.reduce((memo, n) => {
      memo[n <= pivot ? 'lte' : 'gt'].push(n);
      return memo;
  }, { lte: [], gt: [] });
  
  return [...quickSort(lte), pivot, ...quickSort(gt)];
}
