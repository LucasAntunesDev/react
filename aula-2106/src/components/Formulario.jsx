import React, { useState } from 'react';
import './formulario.css';

const Formulario = () => {
  const [controle, setControle] = useState(null);
  const [estouDigitando, setEstouDigitando] = useState(false);
  const [pessoa, setPessoa] = useState({ nome: '', email: '' });

  const handleChange = (name, value) => setPessoa({ ...pessoa, [name]: value });

  const digitando = () => {
    setEstouDigitando(true);

    clearInterval(controle);
    setControle(setTimeout(() => setEstouDigitando(false), 2000));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pessoa);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{ visibility: estouDigitando ? 'visible' : 'hidden' }}
        className="digitando"
      >
        Estou digitando . . .
      </div>

      <div>
        <label htmlFor="nome">Nome</label>
        <input
          value={pessoa.nome}
          onChange={({ target }) => handleChange('nome', target.value)}
          type="text"
          name="nome"
          id="nome"
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          value={pessoa.email}
          onChange={({ target }) => handleChange('email', target.value)}
          type="email"
          name="email"
          id="email"
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  )
}

export default Formulario
