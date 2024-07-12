import {useState} from 'react'
import Cidades from './components/Cidades'
import Estados from './components/Estados'

function App() {
  const [estado, setEstado] = useState('-1')
  const [cidade, setCidade] = useState('-1')

  const handleEstado = async uf => {
    setEstado(uf)
    setCidade('-1')
  }

  return (
    <>
      <h1 className="text-blue-600 mx-auto w-fit my-4 font-bold text-5xl">
        Estado e cidade
      </h1>

      <main className="flex flex-col justify-center items-center w-fit bg-blue-50 p-40 rounded-xl shadow-md shadow-slate-100 gap-y-2">
        <Estados estado={estado} setEstado={handleEstado}  />
        <Cidades uf={estado} cidade={cidade} setCidade={setCidade} />

        <h2>{estado !== '-1' ? 'Você selecionou: ' + estado : ''}</h2>
      </main>
    </>
  )
}

export default App
