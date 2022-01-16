import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <div className="products-container">
      <input
        type="search"
        placeholder="Search Products"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <ul className="products-container__list">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLocaleLowerCase())
          )
          .map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
      </ul>
    </div>
  );
}

export default Products;
