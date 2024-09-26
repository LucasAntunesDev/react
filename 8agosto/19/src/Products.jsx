import {useState, useEffect} from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    })()
  }, [])

  if (loading) return <AiOutlineLoading3Quarters className="loader" />

  return (
    <div>
      {/* <button type="button" >
        Buscar dados
      </button> */}
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  )
}
