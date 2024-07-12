import {useEffect} from 'react'
import {useState} from 'react'

const Estados = ({estado, setEstado}) => {
  const [loading, setLoading] = useState(true)
  const [estados, setEstados] = useState([])

  const handleChange = ({target}) => {
    setEstado(target.value)
  }

  useEffect(() => {
    const carregaEstados = async () => {
      const response = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      )
      const data = await response.json()

      setEstados(data)
      setLoading(false)
    }

    carregaEstados()
  }, [])

  //   if (loading) return <p>Aguarde...</p>

  return (
    <>
      <select
        disabled={loading}
        name="estado"
        id="estado"
        className="border-none rounded-md  p-1 bg-blue-200 focus:border-2 focus:border-blue-600 text-blue-800"
        onChange={handleChange}
        value={estado}>
        <option value="-1"> {loading ? 'Aguarde' : 'Selecione'}</option>

        {estados.map(({nome, sigla}) => (
          <option key={sigla} value={sigla}>
            {nome}
          </option>
        ))}
      </select>
    </>
  )
}

export default Estados
