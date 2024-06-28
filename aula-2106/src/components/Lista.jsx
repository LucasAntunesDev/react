import {useState} from 'react'
import './lista.css'

const Lista = () => {
  const [fruta, setFruta] = useState('')
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Laranja', 'Limão'])

  const addFruta = e => {
    e.preventDefault()
    setFrutas([...frutas, fruta])
    setFruta('')
  }

  return (
    <div>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>

      <form onSubmit={addFruta}>
        
        <div>
          <label htmlFor="fruta">Fruta</label>
          <input
            value={fruta}
            onChange={e => setFruta(e.target.value)}
            type="text"
            name="fruta"
            id="fruta"
          />
        </div>

        <button type="submit" disabled={fruta === ''}>
          Adicionar fruta
        </button>
      </form>
    </div>
  )
}

export default Lista
