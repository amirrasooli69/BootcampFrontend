import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
    const products = useContext(ProductContext);
    return products;
}

const useProductDetails = id =>{
  const products = useProducts();
  const product = products.find(item => item.id === id);
  return product;  
}

export default ProductsProvider;
export {useProducts, useProductDetails};