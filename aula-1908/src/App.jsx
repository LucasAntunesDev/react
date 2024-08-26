import {useState} from 'react'

const Header = ({state}) => {
  return (
    <>
      <header>
        <span>{state}</span>
        <span>span 2</span>
      </header>
    </>
  )
}

const Content = ({state, setState}) => {
  return (
    <main>
      <button type="button" onClick={() => setState(state+1)}>Clique aqui</button>
    </main>
  )
}

const App = () => {
  const [state, setState] = useState(13)

  return (
    <>
      <Header state={state} />
      <aside></aside>
      <Content state={state} setState={setState}/>
      <footer></footer>
    </>
  )
}

export default App
