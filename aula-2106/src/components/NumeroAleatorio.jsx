import {useState} from 'react'

const NumeroAleatorio = () => {
  const [n, setN] = useState(0)
  const [background, setBackground] = useState('red')
  const [id, setId] = useState(null)

  const gerarAleatorio = () => {
    const aux = Math.round(Math.random() * 100)
    setN((aux < 10 ? '0' : '') + aux)
  }

  const trocarCor = () => {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    let cor = `rgb(${red},${green},${blue})`
    setBackground(cor)
  }

  const inicio = () => {
    if (id === null) {
      const id = setInterval(trocarCor, 1000)
      setId(id)
    }
  }
  const parar = () => {
    clearInterval(id)
    setId(null)
  }
  return (
    <section className="button-container">
      <div style={{background}} className="numero-aleatorio">
        {n}
      </div>
      <button type="button" onClick={gerarAleatorio}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Gerar
      </button>
      <button type="button" onClick={inicio}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Trocar cor
      </button>

      <button type="button" onClick={parar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
        Parar
      </button>
    </section>
  )
}

export default NumeroAleatorio
