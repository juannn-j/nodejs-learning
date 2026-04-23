function busqueda_lineal(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
  return -1;
}

const arreglo = [10, 2, 3, 8, 2, 6];
const elemento_busqueda = 2;
const indice = busqueda_lineal(arreglo, elemento_busqueda);

console.log(
  `El elemento es: ${elemento_busqueda} \n se encuentra en el indice: ${indice}`,
);
