import {useEffect, useMemo, useState} from 'react'
import {useAuth} from './Context'
import { FrutasProvider } from './Context'
import './App.css'

const onSubmit = cb => {
  return e => {
    e.preventDefault()
    cb()
  }
}

const Header = () => {
  const [{autenticado}, {signIn, signOut}] = useAuth()
  const onClick = () => {
    autenticado ? signOut() : signIn()
  }

  return (
    <header>
      <button onClick={onClick}>{autenticado ? 'Sair' : 'Entrar'}</button>
    </header>
  )
}

const Content = ({state}) => {
  return (
    <main>
      <ul>
        {state.map((o, idx) => (
          <li key={idx}>{o}</li>
        ))}
      </ul>
    </main>
  )
}

function App() {
  const localState = JSON.parse(localStorage.getItem('state'))
  const [state, setState] = useState(localState || [])

  const add = v => setState([...state, v])

  const limpar = () => {
    localStorage.clear()
    setState([])
  }

  const tamanho = useMemo(() => {
    return state.length
  }, [state])
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
        <Frutas/>
      </footer>
    </>
  )
}

export default App