import {useState} from 'react'
import './lista.css'

const Lista = () => {
  const [fruta, setFruta] = useState('')
  const [frutas, setFrutas] = useState(['Maçã', 'Banana', 'Laranja', 'Limão'])

  const addFruta = e => {
    e.preventDefault()

    const index = frutas.findIndex(f => f > fruta)
    let f = [...frutas]
    f.splice(index < 0 ? f.length : f, 0, fruta)
    setFrutas(f)

    setFruta('')
  }

  const removerFruta = fruta => {
    setFrutas(
      frutas.filter(f => f.toLocaleLowerCase() > fruta.toLocaleLowerCase())
    )
  }

  return (
    <div>
      <ul>
        {frutas.map((fruta, index) => (
          <li key={index}>
            <span>{fruta}</span>

            <button type="button" onClick={() => removerFruta(fruta)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="crimson"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash-2">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1="10" x2="10" y1="11" y2="17" />
                <line x1="14" x2="14" y1="11" y2="17" />
              </svg>
            </button>
          </li>
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
