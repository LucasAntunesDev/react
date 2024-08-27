import {useEffect} from 'react'
import {useState} from 'react'

const Cidades = ({uf, cidade, setCidade}) => {
  const [loading, setLoading] = useState(true)
  const [cidades, setCidades] = useState([])

  const handleChange = ({target}) => {
    setCidade(target.value)
  }

  useEffect(() => {
    const carregaCidades = async () => {
      setLoading(true)
      const response = await fetch(
        `hhttps://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
      )
      const data = await response.json()

      setLoading(false)
      setCidades(data)
    }

    carregaCidades()
  }, [uf])

  return (
    <>
      <select
        className="border-none rounded-md  p-1 bg-blue-200 focus:border-2 focus:border-blue-600 disabled:bg-slate-300 disabled:cursor-not-allowed"
        onChange={handleChange}
        value={cidade}>
        disabled={uf === '-1' || loading}
        <option value="-1">
          {uf === '-1'
            ? 'Selecione um estado'
            : loading
            ? 'Aguarde...'
            : 'Selecionse uma cidade'}
        </option>
        {cidades.map(({nome}) => (
          <option key={nome}>{nome}</option>
        ))}
      </select>
    </>
  )
}

export default Cidades
