import {useEffect, useState} from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

/* eslint-disable react/prop-types */
const Cidades = () => {
  const [loading, setLoading] = useState(true)
  const [estados, setEstados] = useState(null)
  const [estado, setEstado] = useState(null)
  const [cidades, setCidades] = useState(null)
  const [cidade, setCidade] = useState(null)

  const handleEstado = ({target}) => {
    setEstado(target.value)
    console.log(estado)
  }

  const handleCidade = ({target}) => {
    setCidade(target.value)
    console.log(cidade)
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      )
      const data = await res.json()
      setEstados(data)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    if (estado !== null) {
      ;(async () => {
        const res = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios?orderBy=nome`
        )
        const data = await res.json()
        setCidades(data)
      })()
    }
  }, [estado])

  if (loading) return <AiOutlineLoading3Quarters className="loader" />

  return (
    <>
      <select name="estado" onChange={handleEstado}>
        <option value="-1">Selecione um estado</option>
        {estados.map(estado => (
          <option key={estado.id} value={estado.sigla}>
            {estado.sigla}
          </option>
        ))}
      </select>
      <select
        name="ciadade"
        onChange={handleCidade}
        disabled={cidades === null || estado === null}>
        <option value="-1">Selecione uma cidade</option>
        {cidades &&
          cidades.map(cidade => (
            <option key={cidade.id} value={cidade.id}>
              {cidade.nome}
            </option>
          ))}
      </select>
    </>
  )
}

export default Cidades
