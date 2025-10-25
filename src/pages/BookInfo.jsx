import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Rating from '../Components/ui/Rating';
import Price from '../Components/ui/Price';
import Book from '../Components/ui/Book';


const BookInfo = ({books, addToCart, cart }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);

    function addBookToCart(book) {
        addToCart(book)
    }

    function checkInCart() {
        return cart.find(book => book.id === +id)
    }

  return (
    <div>
      <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link" >
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>

                        <Link to="/books" className="book__link" >
                            <h2 className="book__selected--title--top">
                                Books
                            </h2>
                        </Link>
                    </div>

                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src={book.url} alt="" />
                        </figure>

                        <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                {book.title}
                            </h2>

                            <Rating rating={book.rating}  />

                            <div className="book__selected--price">
                                <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
                            </div>

                            <div className="book__summary">
                                <h3 className="book__summary--title">
                                    Summary
                                </h3>

                                <p className="book__summary--para">
                                    Insert dynamic book summary data here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum vero quas. Deleniti tempore quis soluta voluptatibus obcaecati voluptates doloribus.
                                </p>

                            </div>

                                {
                                    checkInCart() ? 
                                    <Link to={`/cart`} className='book__link'>
                                        <button className="btn">Go to cart</button>
                                    </Link> :
                                    <button className="btn" onClick={() => addBookToCart(book)}>
                                        Add to cart
                                    </button>
                                }
                        </div>
                    </div>
                </div>
            </div>

            <div className="book__container">
                <div className="row">
                    <div className="book__selected--top">
                        <h2 className="book__selected--title--top">
                            Recommended For You
                        </h2>
                    </div>

                    <div className="books">    
                        {books
                            .filter(book => book.rating === 5 && 
                                +book.id !== +id)
                            .slice(0, 4)
                            .map(book => <Book book={book} key={book.id} />)
                        }
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  );
};

export default BookInfo;