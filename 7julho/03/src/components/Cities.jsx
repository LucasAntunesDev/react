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
    // setCities([...cities, city])
    // setCities(...cities, cities.sort())
    // setCity('')

    // if (city.trim()) {
        const index = cities.findIndex(c => c === city.trim());
        if (index === -1) {
          setCities([...cities, city.trim()]);
        }
        setCity('');
    //   }

    console.log( cities.sort())
  }

  const removeCity = city => {
    const index = cities.findIndex(c => c === city)
    if (index !== -1) {
      const updatedCities = [...cities]
      updatedCities.splice(index, 1)
      setCities(updatedCities)
    }
  }

  return (
    <section>
      <ul>
        {cities.map((city, index) => (
          <li key={index} onClick={() => removeCity(city)}>
           {city}
          </li>
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

// Criar um componente React com um vetor de cidades (useState)
// Apresentar as cidades em uma lista (ul) em ordem alfabéttica;
// Incluir um formulário para incluir novas cidades
// Essa nova cidade precisa ser incluída na ordem alfabética;
// Utilizar funções auxiliares (findIndexOf, splice, ...)
// Ao clicar em uma palavra, a mesma palavra precisa ser excluida do vetor
