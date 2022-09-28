//here i want to show .. when the user click on specific category [history -business - religion - science - math ] it'll bring jsut the books who relative to this category
import "./style.css";
import axios from "axios";
import { useState, useEffect, useConttext } from "react";
import { useNavigate } from "react-router-dom";
import { usertoken } from "../../App";

// first must make onClick for every specific category .. this onClick must put it on Home

function Category() {

  //-------------get Books By Category-------------
  const [bookCategory, setBookCategory] = useState([]);
  const getBooksByCategory = () => {
    axios
      .get("http://localhost:5000/books/search_1?category:id")
      .then((results) => {
        setCategory(results.data.book);
      });
  };
//-------------get book by id -------------
//when click on anybook it will bring the user to bookinfo





//------------- return -------------
  return (
    <div className="category">
        <div>
        {bookCategory.map((cateElem, index) => {
          //   console.log(categoryElem);
          return (
            <div>
                            <img
                className="img"
                src={`${bookCategory.image} `}
                alt="img not found"
              />
              <h2>{bookCategory.title} </h2>
              <h2>{bookCategory.description} </h2>
              <h2>{bookCategory.price} </h2>
              <h2>{bookCategory.rating} </h2>
            </div>
          );
        })}
        </div>
    </div>
  )
}

export default Category;
