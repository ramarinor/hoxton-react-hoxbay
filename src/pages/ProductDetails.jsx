import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";

function ProductDetails({ addItemToBasket }) {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${params.id}`)
      .then((resp) => resp.json())
      .then((productFromServer) => setProduct(productFromServer));
  }, []);
  if (product === null) {
    return <main>Loading....</main>;
  }
  if (product.title === undefined) {
    return <main>Product not found!</main>;
  }
  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={product.image} alt={product.title} />

        <div
          className="product-detail__side"
          style={{ borderColor: "var(--yellow)" }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>£{product.price}</p>
          <Link to="/basket" onClick={() => addItemToBasket(product)}>
            <button>Add to basket</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ProductDetails;
