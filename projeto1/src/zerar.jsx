const Zerar = ({ n, setN }) => {
  const zerar = () => setN(0)

  const nMinimo = n === 0

  return (
    <button disabled={nMinimo} onClick={zerar} type="button">
      Zerar
    </button>
  )
}

export default Zerar
