
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'

function ProductDetailPage() {
    const {id} = useParams()
  return (
    <div>
        <NavBar />
      <h1>Product Detail Page - product# {id}</h1>
    </div>
  )
}

export default ProductDetailPage
