import "./style.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";
import Rating from "../Home/Rating";
function BookInfo() {
  const user = useContext(usertoken);
  const { id } = useParams();
  // console.log(id);
  // -------------get book by id -------------
  const [books, setBooks] = useState({});
  // console.log("books" ,books);
  const [comment, setComment] = useState("");
  const getBooksById = () => {
    axios
      .get(`http://localhost:5000/books/search_2?id=${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        setBooks(results.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBooksById();
  }, []);
  // -------------create New Cart ~~>[add book to cart]-------------
  console.log(user.token)
  const [addtoCart, setAddtoCart] = useState([]); 
  const [quantity, setQuantity] = useState(1);
  // const [book, setBook] = useState("");

  const createNewCart = () => {
    axios
      .post(
        "http://localhost:5000/cart",
        {
          book: id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((results) => {
        console.log(results);
        // setAddtoCart(results.data.cart)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
  }, []);
  // -------------return-------------
  return (
    <div className="book">
      <div className="book-content">
        <img
          className="book-content-img"
          src={`${books.image}`}
          alt="img not found"
        ></img>
        <div className="book-content-info">
          <h1 className="book-title">{books.title}</h1>
          <div className="book-author">
            by <span>{books.author}</span> (Author)
          </div>
          <Rating rating={books.rating} />
          <div className="book-add-to-cart">
            <button className="book-add-to-cart-btn" onClick={createNewCart}>
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <p className="book-description">{books.description}</p>
     <div className="book-icons">
     <div className="book-icon">
        <small>price : </small>
        <i className="bi bi-currency-dollar"></i>
        <b>{books.price}</b>
      </div>
      <div className="book-icon">
        <small>year : </small>
        <i className="bi bi-calendar3"></i>
        <b>{books.year}</b>
      </div>
      <div className="book-icon">
        <small>puplisher : </small>
        <i className="bi bi-book-half"></i>
        <b>{books.puplish}</b>
      </div>
      
     </div>
     <Link to={`/cart/${books._id}`}>{<button className="show-cart">  <i className="bi bi-cart"></i>show cart</button>} </Link>
      <div>
      </div>
    </div>
  );
}
export default BookInfo;

