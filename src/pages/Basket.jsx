import BasketItem from "../components/BasketItem";

function Basket({ basket, setQuantityOfBasketItem }) {
  function calculateTotal() {
    let total = 0;
    for (const basketItem of basket) {
      total += basketItem.quantity * basketItem.price;
    }
    return total.toFixed(2);
  }
  return (
    <main>
      <section className="basket-container">
        <h2>Your Basket</h2>
        <ul>
          {basket.map((basketItem) => (
            <BasketItem
              basketItem={basketItem}
              setQuantityOfBasketItem={setQuantityOfBasketItem}
              key={basketItem.id}
            />
          ))}
        </ul>
        <h3>Your total: £{calculateTotal()}</h3>
      </section>
    </main>
  );
}

export default Basket;
