import { createRoot } from 'react-dom/client'
//import Teste from './Teste'
import './index.css'

import App from './App'

import { AuthProvider } from './Context'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App/>
    </AuthProvider>
)
