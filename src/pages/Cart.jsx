import React, { useState, useEffect } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, books, removeItem }) => {
  const taxRate = 0.1;
  const subtotal = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +((item.salePrice || item.originalPrice) * item.quantity);
    });
    return price.toFixed(2);
  };

  return (
    <div id="books__body">
      <main className="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>

            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Price</span>
              </div>

              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={book.url}
                          alt=""
                          className="cart__book--img"
                        />

                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>

                          <span className="cart__book--price">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>

                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={999}
                          className="cart__input"
                          value={book.quantity}
                          onChange={(event) =>
                            changeQuantity(book, event.target.value)
                          }
                        />
                      </div>

                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>

              {cart.length === 0 && (<div className="cart__empty">
                <img className="cart__empty--img" src={EmptyCart} alt="" />

                <h2>Your cart is empty</h2>

                <Link to="/books">
                  <button className="btn">Browse Books</button>
                </Link>
              </div>)}
            </div>

            {cart.length > 0 && (
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${subtotal()}</span>
                </div>

                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${(subtotal() * taxRate).toFixed(2)}</span>
                </div>

                <div className="total__item total__price">
                  <span>Total</span>
                  <span>
                    ${(+subtotal() + subtotal() * taxRate).toFixed(2)}
                  </span>
                </div>

                <button className="btn btn__checkout no-cursor">
                  Proceed to checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
