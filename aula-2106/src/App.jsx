import { useState } from "react"
// função padrão fora das chaves e as outras que quero importar dentro
import HelloWorld from "./components/HelloWorld"
import NumeroAleatorio from "./components/NumeroAleatorio"

const App = () => {
  return (
    <>
      <HelloWorld name="Lucas" />
      <NumeroAleatorio />
    </>
  )
}

//Com vetores, a ordem (posição do índice) importa, mas o nome dado não
// const [nome, idade] = ['Lucas', 18]

//Já com objetos, a ordem não importa, mas devo respeitar o mesmo nome
// const pessoa = { nome: 'Lucas', idade: 18 }
// const {nome, idade} = pessoa

export default App
