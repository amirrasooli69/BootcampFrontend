import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";
import styles from "./ProductPage.module.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { categoryFilter, searchFilter, getInitialQuery } from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {

    setDisplayed(products);
    setQuery(getInitialQuery(searchParams))
  }, [products]);

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProduct = searchFilter(products, query.search)
    finalProduct = categoryFilter(finalProduct, query.category);
    setDisplayed(finalProduct)
  }, [query]);


  return (
    <>
    <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
          <Sidebar query={query} setQuery={setQuery}/>
      </div>
    </>
  );
}

export default ProductsPage;
