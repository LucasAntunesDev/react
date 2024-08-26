const Incrementar = ({n, setN}) => {
    const incrementar = () => n < 10 && setN(n + 1)
    const nMaximo = n === 10
  
    return (
      <button
        disabled={nMaximo}
        onClick={incrementar}
        type="button"
        className="incrementar"
      >
        Incrementar
      </button>
    )
  }

  export default Incrementar