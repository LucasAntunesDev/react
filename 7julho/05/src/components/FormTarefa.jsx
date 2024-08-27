const FormTarefa = ({adicionarTarefa, valor, funcao}) => {

  console.log('aaaa ' + funcao)

  return (
    <form className="w-fit flex gap-x-4 items-center mx-auto my-8" onSubmit={adicionarTarefa}>
      <input
        type="text"
        name="tarefa"
        id="tarefa"
        value={valor}
        className="p-3 bg-slate-100 w-fit rounded-xl outline-none foucus:outline-2 focus:outline-sky-500 text-slate-600"
        placeholder="Adicionar tarefa"
        onChange={funcao}
      />

      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-700 transition p-1 flex items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9 text-teal-50">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </form>
  )
}

export default FormTarefa
