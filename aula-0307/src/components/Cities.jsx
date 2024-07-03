import React, {useState} from 'react'

const Cities = () => {
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([
    'Bento Gonçalves',
    'Garibaldi',
    'Porto Alegre',
  ])

  const addCity = e => {
    e.preventDefault()
    setCities([...cities, city])
    setCity('')
  }

  return (
    <section>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>

      <form onSubmit={addCity}>
        <div>
          <label htmlFor="city">Cidade</label>
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            type="text"
            name="city"
            id="city"
          />
        </div>

        <button type="submit" disabled={city === ''}>
          Adicionar cidade
        </button>
      </form>
    </section>
  )
}

export default Cities
