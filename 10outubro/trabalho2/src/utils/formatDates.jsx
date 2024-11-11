export const fromatDates = array => {
  return array.map(turn => {
    const days = turn.dias.join(', ')
    return `${turn.inicio} - ${turn.fim} | ${days}`
  })
}
