import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((resp) => resp.json())
      .then((productsFromServer) => setProducts(productsFromServer));
  }, []);
  return (
    <div className="products-container">
      <ul className="products-container__list">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </ul>
    </div>
  );
}

export default Products;
