let agora = new Date()
let horas = agora.getHours() // para pegar o horario atual.

console.log(`Agora são ${horas} horas!`)
if (horas < 6) {
  console.log(`Boa madrugada!!`)
} else if (horas < 12) {
  console.log(`Bom dia!!`)
} else if (horas < 18) {
  console.log(`Boa Tarde!!`)
} else if (horas <= 24) {
  console.log(`Boa Noite!!`)
}
