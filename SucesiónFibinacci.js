function sucesionFibonacci(posicion) {
  if (posicion == 0) return 0;

  let arr = [0, 1];

  for (let i = 2; i < posicion; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}

console.log(sucesionFibonacci(7));
