function mergeSort(arr) {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);

  const leftSide = mergeSort(arr.slice(0, mid));
  const rightSide = mergeSort(arr.slice(mid));

  let sorted = [];

  while (leftSide.length !== 0 || rightSide.length !== 0) {
    if (leftSide.length === 0) return [...sorted, ...rightSide];
    if (rightSide.length === 0) return [...sorted, ...leftSide];

    if (leftSide[0] < rightSide[0]) sorted.push(leftSide.shift());
    else sorted.push(rightSide.shift());
  }

  return sorted;
}

console.log(mergeSort([58, 763, 167, 957]));
