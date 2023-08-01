function verificar() {
  let data = new Date()
  let ano = data.getFullYear()
  let fano = document.getElementById('txtano')
  let res = document.querySelector('#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    let fsex = document.getElementsByName('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto') // mesma coisa que ir no html e fazer o img id="foto"
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './assets/menino.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', './assets/jovem-h.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', './assets/adulto.jpg')
      } else {
        img.setAttribute('src', './assets/velho.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', './assets/menina.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', './assets/jovem-m.jpg')
      } else if (idade < 50) {
        img.setAttribute('src', './assets/adulta.jpg')
      } else {
        img.setAttribute('src', './assets/velha.jpg')
      }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
