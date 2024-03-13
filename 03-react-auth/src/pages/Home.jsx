import { useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/itemServices'
import { Link } from 'react-router-dom'

const Home = () => {
  // Estado para guardar la información de los productos
  const [products, setProducts] = useState([])

  useEffect(() => {
    // Función para obtener todos los productos
    const fetchProducts = async () => {
      try {
        const response = await getAllItemsService()

        if (response.status === 200) {
          setProducts(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <h1>Home</h1>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {products && products.map((product) => (
          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              {/* Aqui no se implementa el botón, pero basta con sustituir "a" por Link de react-router-dom y la ruta del enlace indicar el componente que mostrará la información de un solo producto, seguido del id del producto */}
              <Link to={`/product/${product.id}`} className='btn btn-primary'>Comprar</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
