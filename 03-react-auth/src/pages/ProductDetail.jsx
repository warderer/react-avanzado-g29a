import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneItemService } from '@/services/itemServices'

const ProductDetail = () => {
  const { pid } = useParams() // Obtengo el ID
  const [product, setProduct] = useState({})

  useEffect(() => {
    // Función para obtener todos los productos
    const fetchProduct = async () => {
      try {
        const response = await getOneItemService(pid)

        if (response.status === 200) {
          setProduct(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProduct()
  }, [pid])

  return (
    <>
      <h1>Product Detail</h1>
      <p> {pid} </p>
      {product?.product_name && <p>Producto: {product?.product_name}</p>}
      {product?.description && <p>Descripción: {product?.description}</p>}
    </>
  )
}
export default ProductDetail
