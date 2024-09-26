import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import Teste from './Teste.jsx'
import './index.css'
import {AuthProvider} from './Context.jsx'
import {Products} from './Products.jsx'

createRoot(document.getElementById('root')).render(
  <Products />
  // <StrictMode>
  //   {/* <App /> */}
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>
  // </StrictMode>
)
