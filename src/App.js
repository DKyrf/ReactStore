import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Electronics from "./components/Electronics/Electronics";
import ShopDescription from "./components/Electronics/ShopDescription";
import OrderProvider from "./store/OrderContext";
import UserProvider from "./store/UserContext";

function App() {

  const [isValid, setIsValid] = useState(false);

  const onCloseCart = () => {
    setIsValid(false)
  };

  const onOpenCart = () => {
    setIsValid(true)
  };

  
  return (
    <OrderProvider>
        <UserProvider>
            <Header openWindow={onOpenCart}/>
            <ShopDescription />
            <Electronics/>
            { isValid && <Cart closeWindow={onCloseCart}/> }
        </UserProvider>      
    </OrderProvider>
  );
}

export default App;
