export const fromatDates = array => {
  const daysNames = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]

  const daysOfTheWeek = daysNames.map((day, index) => {
    const turns = array.filter(turno => turno.dias.includes(day.toUpperCase()))

    if (turns.length === 0) {
      return `${day} | fechado`
    } else {
      const horarios = turns
        .map(turno => `${turno.inicio} - ${turno.fim}`)
        .join(' e ')
      return `${day} | ${horarios}`
    }
  })

  //   return daysOfTheWeek.join('\n')
  return [daysOfTheWeek.join('\n')]
}
