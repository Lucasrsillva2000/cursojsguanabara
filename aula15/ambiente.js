let num = [5, 8, 4]
num[3] = 6 //para adicionar mais um valor no array sem perder os dados dos outros.
num.push(7) //o proprio javascript identifica que a chave é 4.

console.log(`O vetor tem ${num.length} posições`) //para saber o comprimento do array:

console.log(`O vetor tem ${num.sort()} posições`) //para deixar os valores do array ordenados:

let pos = num.indexOf(8) // para buscar valores dentro de um vetor
if (pos == -1) {
  console.log(`O valor não foi encontrado`)
} else {
  console.log(`O valor está na posição ${pos}`)
}
