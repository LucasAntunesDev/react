import {useState} from 'react'

const Tarefa = ({tarefas}) => {
  const [status, setStatus] = useState('')

  const checkbox = (
    <input
      type="checkbox"
      name="concluida"
      id="concluida"
      checked
      className="accent-teal-500"
      onClick={() => setStatus(false)}
    />
  )

  return (
    <>
      {tarefas.map((tarefa, index) => (
        <tr key={index}>
          <td>id</td>
          <td>{tarefa.tarefa}</td>
          <td>
            {tarefa.concluida ? (
              <input
                type="checkbox"
                name="concluida"
                id="concluida"
                checked
                className="accent-teal-500"
                onClick={() => setStatus(false)}
              />
            ) : (
              <input
                type="checkbox"
                name="concluida"
                id="concluida"
                className="accent-teal-500"
                onClick={() => setStatus(true)}
              />
            )}
          </td>
        </tr>
      ))}
    </>
  )
}

export default Tarefa
