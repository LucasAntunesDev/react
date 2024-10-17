import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import Teste from './Teste.jsx'
import './index.css'
import {AuthProvider} from './Context.jsx'
import {Products} from './Products.jsx'
import Cidades from './Cidades.jsx'

createRoot(document.getElementById('root')).render(
  // <Products />
  <Cidades />
  // <StrictMode>
  //   {/* <App /> */}
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>
  // </StrictMode>
)
