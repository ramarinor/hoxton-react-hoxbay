import { useParams } from 'react-router-dom'

function CategoryProducts () {
  const params = useParams()

  // fetch products for this category

  return <h1>Products for category: {params.id}</h1>
}

export default CategoryProducts
