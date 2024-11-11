const horarios = [
  {
    inicio: '08:00',
    fim: '12:00',
    dias: ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'],
  },
  {
    inicio: '13:30',
    fim: '17:30',
    dias: ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA'],
  },
]

const listaHoratrios = horarios.map(h => {
  return h.dias
    .map(dia => dia)
    .map(t => `${t} | ${h.inicio} - ${h.fim}`)
    .map(r => r)
})

const diasDaSemana = [
  'DOMINGO',
  'SEGUNDA',
  'TERCA',
  'QUARTA',
  'QUINTA',
  'SEXTA',
  'SABADO',
]

const formatarHorarios = () => {
  return diasDaSemana.map(dia => {
    const horariosDoDia = horarios.filter(horario => horario.dias.includes(dia))

    if (horariosDoDia.length === 0) return `${dia} | fechado`

    const horariosFormatados = horariosDoDia
      .map(horario => `${horario.inicio} - ${horario.fim}`)
      .join(' e ')

    return `${dia} | ${horariosFormatados}`
  })
}

const dadosFormatados = formatarHorarios()
  .map(horario => `<p>${horario}</p>`)
  .join('')

const listaHorariosMap = listaHoratrios[0].map(m => m)

const horariosFormatados = listaHorariosMap
  .map(horario => `<p>${horario}</p>`)
  .join('')

document.querySelector('#horarios').innerHTML = `<p>${dadosFormatados}</p>`
