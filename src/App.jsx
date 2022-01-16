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
  const [basket, setBasket] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      categoryId: 3,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      quantity: 2
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      categoryId: 3,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      quantity: 1
    }
  ]);

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
