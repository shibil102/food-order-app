import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const onOpenHandler = () => {
    setCartIsShown(true);
  };

  const onCloseHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={onCloseHandler} />}
      <Header onOpen={onOpenHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
