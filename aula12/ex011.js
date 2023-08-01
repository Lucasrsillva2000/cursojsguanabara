let idade = 65

if (idade < 16) {
  console.log('não vota')
} else if (/*idade >= 16 &&*/ idade < 18 || idade >= 65) {
  console.log('voto não obrigatorio')
} else {
  console.log('vota')
}
