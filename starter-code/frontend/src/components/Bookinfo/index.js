import "./style.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";

function BookInfo() {
  const user = useContext(usertoken);
  const { id } = useParams();
  // console.log(id);
  // -------------get book by id -------------
  const [books, setBooks] = useState({});
  // console.log("books" ,books);
  const [comment, setComment] = useState("");
  // const [error, setError] = useState(false);
  const getBooksById = () => {
    axios
      .get(`http://localhost:5000/books/search_2?id=${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        console.log(results);
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
  const [addtoCart, setAddtoCart] = useState([]); //..>?
  const [quantity, setQuantity] = useState("");
  const [book, setBook] = useState("");

  const createNewCart = () => {
    axios
      .post(
        "http://localhost:5000/cart",
        {
          
          book,
          quantity
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
    createNewCart();
  }, []);

  // -------------return-------------
  return (
    <div>
      <div>
        <h2 key="booktitle">{books.title}</h2>
        <img className="img" src={`${books.image}`} alt="img not found"></img>
        <h2>{books.author}</h2>
        <h2>{books.description}</h2>
        <h2>{books.category && books.category.title}</h2>
        <h2>{books.year}</h2>
        <h2>{books.puplish}</h2>
        <h2>{books.price}</h2>
        <h2>{books.rating}</h2>
        <input
          type="text"
          placeholder="comment"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button type="submit" className="cart" onClick={BookInfo}>
          enter
        </button>
      </div>
      <div>
        <button className="added-to-cart" onClick={createNewCart}>
          added to cart
        </button>
        <Link to={`/cart/${books._id}`}>{<button>show cart</button>}</Link>
      </div>
      {/*----------return createNewCart ----------*/}
      {/* <div>
      {addtoCart.map((add,i)=>{
        return (

        )
      })}
     </div> */}
    </div>
  );
}
export default BookInfo;
