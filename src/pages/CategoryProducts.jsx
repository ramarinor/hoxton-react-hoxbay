import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";

function CategoryProducts() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/products?categoryId=${params.id}`)
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

export default CategoryProducts;
