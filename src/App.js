import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import ScrollToTop from "./Components/ScrollToTop";
import Cart from "./pages/Cart";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, cartQuantity) {
    setCart(cart.map(element => 
      element.id === book.id
        ? {
          ...element,
          quantity: +cartQuantity
          } : element
    ))
  }

  function removeItem(book) {
    setCart(cart.filter(item => item.id !== book.id))
  }

  function numberOfCartItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav numberOfCartItems={numberOfCartItems()} />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/books" exact element={<Books books={books} />} />

          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />

          <Route
            path="/cart"
            element={
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
