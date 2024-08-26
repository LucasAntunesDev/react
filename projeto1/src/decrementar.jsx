const Decrementar = ({ n, setN }) => {
  const decrementar = () => n > 0 && setN(n - 1)
  const nMinimo = n === 0

  return (
    <button
      disabled={nMinimo}
      onClick={decrementar}
      type="button"
      className="decrementar"
    >
      Decrementar
    </button>
  )
}

export default Decrementar
