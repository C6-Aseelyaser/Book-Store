//   when click on anybook it will bring the user to bookinfo
//   this will be in Bookinfo copmponents
//1. Link to ..> on image
//2.Routes + app.js  /bookInfo
//3. on bookInfo comp. import Link
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
  const [comment, setComment] = useState("")
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

  // -------------return-------------

  return (
    <div>
       {/* console.log(1213); */}
      {/* {books && books.map((Ele, index) => {  //books undefined
        // console.log(bookInfoElem);

        return ( */}
          <div>
            <h2 key="booktitle">{books.title}</h2>
            <img
              className="img"
              src={`${books.image}`}
              alt="img not found"
            ></img>
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
        <Link to = {`/cart/${books._id}`}>{<button >add to cart</button>}</Link>
        
      </div>
      

      {/* <Link to={`/bookInfo/${cateElem._id}`}>
                {
                  <img
                    className="img"
                    src={`${cateElem.image} `}
                    alt="img not found"
                  />
                }
              </Link> */}
    </div>
  );
}
export default BookInfo;
//button ..> add to cart  ~~> that add book to cart
//new components cart ~~>
//1.that show the books who added to cart
//2."message: Added to your cart"
//3. show cart subtotal



//1. books undefined 
//2.you need to make sure that the array is not undefined
//3.how to make sure 
//4.&&    ~~>  if in map


//addComment 1.need input & button "enter comment" 
//2.usestate