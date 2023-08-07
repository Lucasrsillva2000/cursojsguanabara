let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value)) //push você adiciona elementos dentro de um vetor
    let item = document.createElement('option') //cria o elemento HTML 'option' pelo JS
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item) //adiciona na lista
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou já encontrado na lista.')
  }

  num.value = '' //para apagar o campo
  num.focus() //para o mouse focar novamente no campo
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('adicione valores antes de finalizar.')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
      //para cada posição em valores faça o teste.
      soma += valores[pos]
      if (valores[pos] > maior) maior = valores[pos]
      if (valores[pos] < menor) menor = valores[pos] //se o valores na posição pos for maior que o maior valor, o maior valor passa a ser valores pos
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
  }
}
