
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

console.log(12356)
function BookInfo() {
  const user = useContext(usertoken);
  const { params } = useParams();
  // -------------get book by id -------------
  const [books, setBooks] = useState([]);
  const getBooksById = () => {

    axios
      .get(`http://localhost:5000/books/search_2?id=${params}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        console.log("then")
        console.log(results);
        setBooks(results.data.books); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {books.map((bookInfoElem, index) => {
        console.log(bookInfoElem);
        return (
          <div>
            <h2 key="booktitle">{bookInfoElem.title}</h2>
            <img
              className="img"
              src={`${bookInfoElem.image}`}
              alt="img not found"
            ></img>
            <h2>{bookInfoElem.author}</h2>
            <h2>{bookInfoElem.description}</h2>
            <h2>{bookInfoElem.category}</h2>
            <h2>{bookInfoElem.year}</h2>
            <h2>{bookInfoElem.puplish}</h2>
            <h2>{bookInfoElem.price}</h2>
            <h2>{bookInfoElem.rating}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default BookInfo;
