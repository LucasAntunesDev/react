import { useState } from "react"
import "./app.css"
import Incrementar from './incrementar'
import Decrementar from './decrementar'
import Zerar from './zerar'

export const Teste = () => <div>Olá</div>

const App = () => {
  const [n, setN] = useState(0)

  return (
    <div class="conatiner">
      <h2>Título {n}</h2>

      <div className="btn-conatiner">

        <Decrementar n={n} setN={setN}/>
        <Zerar n={n} setN={setN}/>
        <Incrementar n={n} setN={setN}/>

      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ea quasi
        quas, sequi voluptatem atque accusamus vero. Eos ea quae ipsum
        repudiandae exercitationem natus iusto, quam dolore. Asperiores,
        nesciunt pariatur.
      </p>
    </div>
  )
}

export default App
