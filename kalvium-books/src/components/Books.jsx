/* eslint-disable react/prop-types */

import notFound from "../assets/notfound.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Books(props) {
  return (
    <>
    <Navbar/>

    { props.loading ?

    <div className="loader"></div>:

    <div id="search-result">
      {props.searchResults.length > 0 ? (
        <div id="book-container">
          {props.searchResults.map((book) => (
            <div key={book.id}>
              <img src={book.imageLinks?.thumbnail} />
              <h4>{book.title}</h4>
              <p>
                {book.averageRating ? (
                  <>
                    {book.averageRating}★  <span className="free">Free</span>{" "}
                  </>
                ) : (
                  <span className="free">Free</span>
                )}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <img id="not-found" src={notFound} alt="" />
      )}
    </div>}
        <Footer/>
    </>
  );
}

export default Books;
