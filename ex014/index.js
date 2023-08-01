function carregar() {
  let msg = window.document.getElementById('msg')
  let img = window.document.getElementById('imagem')
  let agora = new Date()
  let horas = agora.getHours()

  msg.innerHTML = `Agora são ${horas} horas!`

  if (horas >= 0 && horas < 12) {
    img.src = './assets/day.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (horas >= 12 && horas <= 18) {
    img.src = './assets/afternoon.jpg'
    document.body.style.background = '#b9846f'
  } else {
    img.src = './assets/night.jpg'
    document.body.style.background = '#515154'
  }
}
