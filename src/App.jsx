import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import Basket from "./pages/Basket";
import NotFound from "./pages/NotFound";
import { useState } from "react";

function App() {
  const [basket, setBasket] = useState([]);

  function addItemToBasket(product) {
    const updatedBasket = JSON.parse(JSON.stringify(basket));
    const basketItemFound = updatedBasket.find(
      (basketItem) => basketItem.id === product.id
    );
    if (basketItemFound) {
      if (basketItemFound.quantity < 3) basketItemFound.quantity++;
    } else {
      const newBasketItem = { ...product, quantity: 1 };
      updatedBasket.push(newBasketItem);
    }
    setBasket(updatedBasket);
  }
  function setQuantityOfBasketItem(e, basketItem) {
    let updatedBasket = JSON.parse(JSON.stringify(basket));
    const basketItemFound = updatedBasket.find(
      (targetBasketItem) => targetBasketItem.id === basketItem.id
    );
    basketItemFound.quantity = Number(e.target.value);
    //delete item if quantity is 0;
    if (basketItemFound.quantity === 0) {
      console.log("deleting basket item");
      updatedBasket = updatedBasket.filter(
        (targetBasketItem) => targetBasketItem.id !== basketItem.id
      );
    }
    setBasket(updatedBasket);
  }

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route index element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/products/:id"
            element={<ProductDetails addItemToBasket={addItemToBasket} />}
          />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<CategoryProducts />} />
          <Route
            path="/basket"
            element={
              <Basket
                basket={basket}
                setQuantityOfBasketItem={setQuantityOfBasketItem}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
