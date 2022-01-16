import { useParams } from 'react-router-dom'

function ProductDetails () {
  const params = useParams()

  // fetch product

  console.log('Params', params)

  return <h1>Details for product: {params.id}</h1>
}

export default ProductDetails
