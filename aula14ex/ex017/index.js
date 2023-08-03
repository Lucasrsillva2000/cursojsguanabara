function tabuada() {
  let num = window.document.getElementById('txtn')
  let tab = window.document.getElementById('seltab')

  if (num.value.length == 0) {
    //se a quantidade de caracteres do valor for igual a 0
    // isso só vai se aplicar se o input/variavel estiver cheia, para isso esse if, para fazer essa checagem

    alert('Digite um Numero')
  } else {
    let n = Number(num.value)
    c = 1
    tab.innerHTML = '' // antes de começar a tabuada, limpa a tabela.
    while (c <= 10) {
      //para criar qualquer elemento dentro do javascript se usa o createElement
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}` //item.text é a parte de dentro do elemento, no caso o 'option'
      tab.appendChild(item) //adiciona um filho a tabuada, no caso um 'option'
      c++ //para acrescentar 1 sempre que chegar no c++, assim vai retornar para o while e repetir o processo até chegar em 10.
    }
  }
}
