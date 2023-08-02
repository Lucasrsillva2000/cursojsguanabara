function counting() {
  let ini = window.document.getElementById('txti')
  let fim = window.document.getElementById('txtf')
  let passo = window.document.getElementById('txtp')
  let res = window.document.getElementById('res')

  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    //checagem basica se está recebendo valores
    res.innerHTML = 'Impossível contar!'
  } else {
    res.innerHTML = 'contando: <br>' //usei o br para quebrar a linha, já que está sendo usado o innerHTML que permite o uso de tags html
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (i > f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449} `
      }
    } else {
      //contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
