import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import DisplayHeader from "./components/DisplayHeader/DisplayHeader"
import Menu from "./components/Menu/Menu";
import CartProvider from "./context/cart/CartProvider";
import Dummy from "./components/Dummy/Dummy";
import CartModal from "./components/CartModal/CartModal";

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <CartProvider>
      <Navbar cartClick={handleShow}  />
      <CartModal show={show} handleClose={handleClose}/>
      <DisplayHeader/>
      <Menu/>
    </CartProvider>
  );
}

export default App;
