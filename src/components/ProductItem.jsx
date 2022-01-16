import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <li className="product-item">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
      </Link>
    </li>
  );
}
export default ProductItem;
