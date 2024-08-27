import {useState} from 'react'

import './App.css'

//Função para não precisar chamar preventDefault()
//em vários formulários na aplicação.
//Dá pra adaptar pra usar outra função também, como validação de formulários.
//Em linhas gerais, já resolve algumas regras nela, evitando repetição de código
const onSubmit = callBack => {
  return event => {
    event.preventDefault()
    callBack()
  }
}

//todos os atributos de uma tag react são, na verdade, parte de um objeto javascript.
//é por isso que usamos props.propiedade para acessá-la ou, então,
//desestrututamos ela
const Header = ({add}) => {
  const [nome, setNome] = useState('')

  const handleSubmit = () => {
    if (nome === '') return
    //o que usuário digitar será colocado no array
    add(nome)
    //limpa o valor do input
    setNome('')
  }

  return (
    <>
      <header>
        <form onSubmit={onSubmit(handleSubmit)}>
          <input
            type="text"
            name="nome"
            value={nome}
            onChange={({target}) => setNome(target.value)}
          />
          <button disabled={!nome}>Adicionar</button>
        </form>
      </header>
    </>
  )
}

const Content = ({state}) => {
  return (
    <main>
      <ul>
        {state.map((object, index) => (
          <li key={index}>{object}</li>
        ))}
      </ul>
    </main>
  )
}

const App = () => {
  const [state, setState] = useState([])
  //recebe um valor e altera um estado do que está dentro do contructor
  //três pontos => cria uma cópia de state,
  //valor a a "cópia" são inseridos em state
  const add = valor => setState([...state, valor])

  return (
    <>
      {/* header é responsável por adicionar informações */}
      <Header add={add} />
      <aside></aside>
      {/* header é responsável por mostrar informações */}
      <Content state={state} />
      <footer></footer>
    </>
  )
}

export default App
