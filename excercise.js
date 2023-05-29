function sumRange(number, total = 0) {
  if (number <= 1) return 1;
  return (total = number + sumRange(number - 1, total));
}

function power(n, m) {
  if (m === 0) return 1;
  return power(n, m - 1) * n;
}

function fact(n) {
  if (n == 1) return 1;
  return fact(n - 1) * n;
}

function all(arr, callback, i = 0) {
  if (!callback(arr[i])) return false;
  if (i >= arr.length - 1) return true;
  return all(arr, callback, i + 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr.shift() * productOfArray(arr);
}

function contains(obj, value) {
  for (const key in obj) {
    if (typeof obj[key] === 'object') return contains(obj[key], value);
    if (obj[key] === value) return true;
  }
  return false;
}

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: 'foo2',
          },
        },
      },
    },
  },
};

const seven = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
const one = [1, 2];
const two = [1, [2]];

function totalInt(arr) {
  let total = 0;
  arr.forEach((value) => {
    if (Array.isArray(value)) total += totalInt(value);
    if (Number.isInteger(value)) total += 1;
  });
  return total;
}

var l = [1, 2, 3];
l = [[1, 2], 3];
l = [[[[[[[[[1]]]]]]]]];
l = [10, [[10], 10], [10]];
function sumSquares(list) {
  let total = 0;
  if (list.length === 0) return 0;
  list.forEach((value) => {
    if (Array.isArray(value)) total += sumSquares(value);
    else total += value * value;
  });

  return total;
}

function replicate(nTimes, number) {
  if (nTimes <= 0) return [];
  let arr = [];

  arr.push(number);

  return [...arr, ...replicate(nTimes - 1, number)];
}

// console.log(replicate(3, 5)); // [5, 5, 5]
// console.log(replicate(1, 69)); // [69]
// console.log(replicate(-2, 6)); // []

function collatz(n) {
  if (n === 1) return 0;
  if (n % 2 === 0) return 1 + collatz(n / 2);

  return 1 + collatz(3 * n + 1);
}
