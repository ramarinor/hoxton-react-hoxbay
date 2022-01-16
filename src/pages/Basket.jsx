import BasketItem from "../components/BasketItem";

function Basket({ basket }) {
  return (
    <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {basket.map((basketItem) => (
            <BasketItem basketItem={basketItem} key={basketItem.id} />
          ))}
        </ul>
        <h3>Your total: £109.95</h3>
      </section>
    </main>
  );
}

export default Basket;
