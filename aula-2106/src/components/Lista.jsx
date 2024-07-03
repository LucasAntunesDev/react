import {useState} from 'react'
import './lista.css'

const Lista = () => {
  const [fruta, setFruta] = useState('')
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Laranja', 'Limão'])

  const addFruta = e => {
    e.preventDefault()
    
    const index = frutas.findIndex(f => f > fruta)
    let f = [...frutas]
    f.splice(index < 0 ? f.length : f, 0 , fruta)
    setFrutas(f)

    setFruta('')
  }

  const removerFruta = () => {

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
