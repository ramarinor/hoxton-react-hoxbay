import { Link } from "react-router-dom";

function BasketItem({ basketItem }) {
  return (
    <li>
      <article className="basket-container__item">
        <Link to={`/products/${basketItem.id}`}>
          <img src={basketItem.image} alt={basketItem.title} width="90" />
        </Link>
        <Link to={`/products/${basketItem.id}`}>
          <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        </Link>
        <p>
          Qty:
          <select defaultValue={basketItem.quantity}>
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </p>
        <p>
          Item total: £{(basketItem.quantity * basketItem.price).toFixed(2)}
        </p>
      </article>
    </li>
  );
}
export default BasketItem;
