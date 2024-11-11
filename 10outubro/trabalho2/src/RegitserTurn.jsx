import {useForm} from 'react-hook-form'
import {useState} from 'react'
import {fromatDates} from './utils/formatDates'

const DAYS_OF_WEEK = [
  {name: 'SEGUNDA', label: 'Segunda-feira'},
  {name: 'TERCA', label: 'Terça-feira'},
  {name: 'QUARTA', label: 'Quarta-feira'},
  {name: 'QUINTA', label: 'Quinta-feira'},
  {name: 'SEXTA', label: 'Sexta-feira'},
  {name: 'SABADO', label: 'Sábado'},
  {name: 'DOMINGO', label: 'Domingo'},
]

const DAY_NAMES_PT = [
  'SEGUNDA',
  'TERCA',
  'QUARTA',
  'QUINTA',
  'SEXTA',
  'SABADO',
  'DOMINGO',
]

const RegisterTurn = () => {
  const {register, handleSubmit, reset, setValue} = useForm()
  const [turns, setTurns] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  const onSubmit = data => {
    const selectedDays = DAYS_OF_WEEK.map((day, index) =>
      data[day.name] ? DAY_NAMES_PT[index] : null
    ).filter(Boolean)

    const newTurn = {
      inicio: data.start,
      fim: data.end,
      dias: selectedDays,
    }

    if (editingIndex !== null) {
      const updatedTurns = [...turns]
      updatedTurns[editingIndex] = newTurn
      setTurns(updatedTurns)
      setEditingIndex(null)
    } else {
      setTurns(prevTurns => [...prevTurns, newTurn])
    }

    resetForm()
  }

  const resetForm = () => {
    reset()
    setEditingIndex(null)
  }

  const removeTurn = index => {
    setTurns(turns.filter((_, i) => i !== index))
  }

  const editTurn = index => {
    const turn = turns[index]
    setEditingIndex(index)

    setValue('start', turn.inicio)
    setValue('end', turn.fim)

    DAYS_OF_WEEK.forEach((day, i) => {
      setValue(day.name, turn.dias.includes(DAY_NAMES_PT[i]) || false)
    })
  }

  return (
    <section className="container">
      <div>
        <h1>Cadastrar turno</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="start">Início</label>
            <input
              type="time"
              id="start"
              {...register('start', {required: true})}
            />
          </div>
          <div>
            <label htmlFor="end">Fim</label>
            <input
              type="time"
              id="end"
              {...register('end', {required: true})}
            />
          </div>

          <div>
            {DAYS_OF_WEEK.map(day => (
              <div key={day.name}>
                <input type="checkbox" id={day.name} {...register(day.name)} />
                <label htmlFor={day.name}>{day.label}</label>
              </div>
            ))}
          </div>

          <button type="submit">
            {editingIndex !== null ? 'Atualizar' : 'Salvar'}
          </button>
          {editingIndex !== null && (
            <button type="button" onClick={resetForm}>
              Cancelar Edição
            </button>
          )}
        </form>
      </div>

      <div>
        <h2>Turnos</h2>
        <ul>
          {turns.map((turn, index) => (
            <li key={index}>
              <span>{fromatDates([turn])[0]}</span>
              <button type="button" onClick={() => editTurn(index)}>
                Editar
              </button>
              <button type="button" onClick={() => removeTurn(index)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RegisterTurn
