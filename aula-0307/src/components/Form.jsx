import {useState} from 'react'

const Form = () => {

  const [city, setCity] = () => useState({name: '',})
  const handleChange = (name, value) => setPessoa({...city, [name]: value})

  const handleSubmit = e => {
    e.preventDefault()
    console.log(city)
  }

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="city">Cidade</label>
        <input
          value={city.name}
          onChange={({target}) => handleChange(target)}
          type="text"
          name="name"
          id="name"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default Form
