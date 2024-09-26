import { createContext, useContext, useState, useEffect, useReducer  } from "react";
const Context = createContext(null)
const initialState = {nome: '', autenticado: false}
const CHANGE = "CHANGE"
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const login = nome => ({type: LOGIN, payload: {nome}})
const logout = () => ({type: LOGOUT})
const change = nome => ({type: CHANGE, payload: {nome}})

const reducer = (state, {type, payload}) => {
    switch(type){
        case LOGIN: {
            const { nome } = payload
            return {...state, nome, autenticado: true}
        }
        case LOGOUT: return initialState
        case CHANGE: {
            if (!state.autenticado) return state
            const {nome} = payload
            return {...state, nome}
        }
        default: return state
    }
}
export const useAuth = () => {
    const context = useContext(Context)
    if (!context) alert('Você deve usar o useAuth dentro do AuthProvider.')
    return context
}
export const AuthProvider = ({children}) => {
    const localState = JSON.parse(localStorage.getItem('state'))
    const [state, dispatch] = useReducer(reducer, localState || initialState)
    const signIn = () => dispatch(login("Thyago"))
    const signOut = () => dispatch(logout())
    const changeName = () => dispatch(change('Salvá'))

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    return (
        <Context.Provider value={[state, { signIn, signOut, changeName }]}>
            {children}
        </Context.Provider>
    )
}
