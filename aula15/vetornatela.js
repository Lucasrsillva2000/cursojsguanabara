let valores = [8, 1, 7, 4, 2, 9]

/*for (let pos = 0; pos <= valores.length; pos++) {
  //enquanto o pos for menor que o comprimento do vetor/não chegar no final do vetor, incremente mais 1
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
  //para cada posição em/dentro de valores, mostre o (valores[pos])
  console.log(valores[pos])
}
