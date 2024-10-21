import {useForm} from 'react-hook-form'
import {useState, useEffect} from 'react'

import {fromatDates} from './utils/formatDates'

const RegisterTurn = () => {
  const {register, handleSubmit, reset} = useForm()

  const [turns, setTurns] = useState([])

  const [editingTurn, setEditingTurn] = useState(null)

  const onSubmit = data => {
    const daysOfTheWeek = [
      'monday',
      'tuesday',
      'wednesday',
      'thursday',
      'friday',
      'saturday',
      'sunday',
    ]
    const daysNames = [
      'SEGUNDA',
      'TERCA',
      'QUARTA',
      'QUINTA',
      'SEXTA',
      'SABADO',
      'DOMINGO',
    ]

    const selectedDays = daysOfTheWeek
      .map((day, index) => (data[day] ? daysNames[index] : null))
      .filter(Boolean)

    const array = [
      {
        inicio: data.start,
        fim: data.end,
        dias: selectedDays,
      },
    ]
    const newTurn = fromatDates(array)

    // Se estiver editando, atualiza o turno, senão, adiciona um novo
    if (editingTurn !== null) {
      const updatedTurns = [...turns]
      updatedTurns[editingTurn] = newTurn[0]
      setTurns(updatedTurns)
      setEditingTurn(null) // Reseta o modo de edição
    } else {
      setTurns(prevTurns => [...prevTurns, ...newTurn])
    }

    reset()
  }

  const removeTurn = turn => {
    const index = turns.findIndex(c => c === turn)
    if (index !== -1) {
      const updatedTurns = [...turns]
      updatedTurns.splice(index, 1)
      setTurns(updatedTurns)
    }
  }

  const editTurn = turn => {
    const index = turns.findIndex(c => c === turn)
    if (index !== -1) {
      setEditingTurn(index) // Define o índice do turno que está sendo editado

      // Preenche os valores do formulário com os valores do turno selecionado
      setValue('start', turn.inicio)
      setValue('end', turn.fim)

      const daysOfTheWeek = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday',
      ]
      const daysNames = [
        'SEGUNDA',
        'TERCA',
        'QUARTA',
        'QUINTA',
        'SEXTA',
        'SABADO',
        'DOMINGO',
      ]

      daysOfTheWeek.forEach((day, index) => {
        setValue(day, turn.dias.includes(daysNames[index]))
      })
    }
  }

  return (
    <>
      <h1>Cadastrar turno</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="start">Início</label>
          <input type="time" id="start" {...register('start')} />
        </div>
        <div>
          <label htmlFor="end">Fim</label>
          <input type="time" id="end" {...register('end')} />
        </div>

        <div>
          <div>
            <input
              type="checkbox"
              name="monday"
              id="monday"
              {...register('monday')}
            />
            <label htmlFor="monday">Segunda-feira</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="tuesday"
              id="tuesday"
              {...register('tuesday')}
            />
            <label htmlFor="tuesday">Terça-feira</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="wednesday"
              id="wednesday"
              {...register('wednesday')}
            />
            <label htmlFor="wednesday">Quarta-feira</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="thursday"
              id="thursday"
              {...register('thursday')}
            />
            <label htmlFor="thursday">Quinta-feira</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="friday"
              id="friday"
              {...register('friday')}
            />
            <label htmlFor="friday">Sexta-feira</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="saturday"
              id="saturday"
              {...register('saturday')}
            />
            <label htmlFor="saturday">Sábado</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="sunday"
              id="sunday"
              {...register('sunday')}
            />
            <label htmlFor="sunday">Domingo</label>
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>

      <div>
        <h2>Turnos cadastrados:</h2>
        <ul>
          {turns.map((turn, index) => (
            <li key={index}>
              <span>
                {turn.inicio} - {turn.fim} ({turn.dias.join(', ')})
              </span>
              <button type="button" onClick={() => editTurn(turn)}>
                Editar
              </button>
              <button type="button" onClick={() => removeTurn(turn)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default RegisterTurn
