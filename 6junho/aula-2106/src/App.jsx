import { useState } from "react"
import HelloWorld from "./components/HelloWorld"
import NumeroAleatorio from "./components/NumeroAleatorio"
import Formulario from './components/Formulario'
import Formulario2 from './components/FormularioTeste'
import Lista from './components/Lista'

const App = () => {
  return (
    <main className='container'>
      <HelloWorld name="Lucas" />
      <NumeroAleatorio />
      <Formulario/>
      {/* <Formulario2/> */}
      <Lista/>
    </main>
  )
}

export default App
