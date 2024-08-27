import {useState} from 'react'

import Tarefa from './Tarefa'
import FormTarefa from './FormTarefa'

const ListaDeTarefas = () => {
  const [tarefa, setTarefa] = useState('')

  const [tarefas, setTarefas] = useState([
    {tarefa: 'Tarefa 1', concluida: false},
    {tarefa: 'Tarefa 2', concluida: true},
    {tarefa: 'Tarefa 3', concluida: false},
  ])

  const adicionarTarefa = e => {
    e.preventDefault()
    
    console.log(tarefa)
    setTarefas([...tarefas, {tarefa: tarefa, concluida: false}])
    setTarefa('')
  }

  return (
    <main className="text-slate-600 flex flex-col items-center">
      <h1 className="text-6xl font-bold text-sky-500 mx-auto w-fit my-4">
        Lista de Tarefas
      </h1>

      <FormTarefa adicionarTarefa={adicionarTarefa} valor={tarefa} funcao={e =>  setTarefa(e.target.value)}/>

      <table className="">
        <thead className="p-4 border-b border-b-slate-300 *:p-4">
          <td>Id</td>
          <td>Tarefa</td>
          <td>Status</td>
        </thead>

        <tbody>
          <Tarefa tarefas={tarefas} valor={tarefa}/>
        </tbody>
      </table>
    </main>
  )
}

export default ListaDeTarefas
