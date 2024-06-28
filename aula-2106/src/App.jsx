import { useState } from "react"
import HelloWorld from "./components/HelloWorld"
import NumeroAleatorio from "./components/NumeroAleatorio"
import Formulario from './components/Formulario'
import Lista from './components/Lista'

const App = () => {
  return (
    <main className='container'>
      <HelloWorld name="Lucas" />
      <NumeroAleatorio />
      <Formulario/>
      <Lista/>
    </main>
  )
}

export default App
