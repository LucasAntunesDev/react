import {useState, useEffect, useMemo} from 'react'

import './App.css'

const onSubmit = callBack => {
  return event => {
    event.preventDefault()
    callBack()
  }
}

const Header = ({add}) => {
  const [nome, setNome] = useState('')

  const handleSubmit = () => {
    if (nome === '') return

    add(nome)

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
  const localState = JSON.parse(localStorage.getItem('state'))

  const [state, setState] = useState(localState || [])

  const add = valor => setState([...state, valor])

  const limpar = () => {
    localStorage.clear()
    setState([])
  }

  //tem que ter return
  //executa e retorna um valor sempre que a dependencia mudar
  //evita que haja calculos toda hora
  const tamanho = useMemo(() => {
    return state.length
  }, [state])

  //quando a dependencia é mudada, a função é executada novamente,
  //ou seja, ele 'assiste' a variável
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <>
      <Header add={add} />
      <aside>{tamanho}</aside>
      <Content state={state} />
      <footer>
        <button type="button" onClick={limpar}>
          Limpar
        </button>
      </footer>
    </>
  )
}

export default App
