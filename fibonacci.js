function fibs(n) {
  const fibo = [0, 1];
  for (let i = 0; arr.length < n; i++) {
    arr.push(fibo[i] + fibo[i + 1]);
  }
  return fibo;
}

function fibsRec(n, seq = [0, 1]) {
  if (seq.length >= n) return seq.slice(0, n);
  seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
  return fibsRec(n, seq);
}

// console.log(fibs(8));
console.log(fibsRec(8));
