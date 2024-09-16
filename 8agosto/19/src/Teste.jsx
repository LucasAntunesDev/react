import {useEffect} from 'react'
import {useState} from 'react'
import {useReducer} from 'react'

const initialState = {nome: '', autenticado: false}

const CHANGE = 'CHANGE'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const login = nome => ({type: LOGIN, payload: {nome}})
const logout = () => ({type: LOGOUT})
const change = nome => ({type: CHANGE, payload: {nome}})

//type e payload são uma ação, vai permitir que eu altere o valor atual (state)
const reducer = (state, {type, payload}) => {
  switch (type) {
    case LOGIN: {
      const {nome} = payload
      return {...state, nome, autenticado: true}
    }
    case LOGOUT:
      return initialState
    case CHANGE: {
      if (!state.autenticado) return state

      const {nome} = payload
      return {...state, nome}
    }
    default:
      return state
  }
}

const Teste = () => {
  const localState = JSON.parse(localStorage.getItem('state'))
  const [state, dispatch] = useReducer(reducer, localState || initialState)

  const signIn = () => {
    dispatch(login('Lucas'))
    setAutenticado(true)
  }

  const signOut = () => {
    dispatch(logout())
    setAutenticado(false)
  }

  const changeName = () => dispatch(change('Antunes'))

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      {state.autenticado
        ? `${state.nome} está autenticado!`
        : 'Você não está autenticado!'}
      <button type="button" onClick={signIn}>
        Autenticar
      </button>
      <button type="button" onClick={signOut}>
        Sair
      </button>
      <button type="button" onClick={changeName}>
        Trocar nome
      </button>
    </div>
  )
}

export default Teste
