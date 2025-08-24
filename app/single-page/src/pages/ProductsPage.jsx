import NavBar from "../components/NavBar";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

  const Products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];

function ProductsPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const name = searchParams.get("name");
    const family = searchParams.get("family");

    console.log(name, family)

    const clickHandler = () => {
        setSearchParams({name: "hasan", family: "javadi"})        
    }

    const goHomeHandler = () => {
        navigate("/")
    }

  return (
    <div>
      <NavBar />
      <ul>
        {Products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              Product {product.id}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={clickHandler}>query</button>
      <button onClick={goHomeHandler}>Go Home</button>
    </div>
  );
}

export default ProductsPage;
