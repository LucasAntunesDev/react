import { useState } from "react"

const NumeroAleatorio = () => {
  const [n, setN] = useState(0)
  const [background, setBackground] = useState("red")
  const [id, setId] = useState(null)

  const gerarAleatorio = () => {
    const aux = Math.round(Math.random() * 100)
    setN((aux < 10 ? "0" : "") + aux)
  }

  const trocarCor = () => {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    let cor = `rgb(${red},${green},${blue})`
    setBackground(cor)
  }

  const inicio = () => setId(setInterval((trocarCor), 1000))
  const parar = () => clearInterval(id)

  return (
    <>
      <div style={{ background }}>{n}</div>
      <button type="button" onClick={gerarAleatorio}>
        Gerar
      </button>
      <button type="button" onClick={inicio}>
        Trocar cor
      </button>
      <button type="button" onClick={parar}>
        Parar
      </button>
    </>
  )
}

export default NumeroAleatorio
