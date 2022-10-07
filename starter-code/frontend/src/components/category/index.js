import "./category.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";
import Rating from "../Home/Rating";

function Category() {
  const user = useContext(usertoken);
  const { id } = useParams();
  // console.log(id)
  //-------------get Books By Category-------------
  const [bookCategory, setBookCategory] = useState([]);
  const getBooksByCategory = () => {
    axios
      .get(`http://localhost:5000/books/search_1?category=${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        setBookCategory(results.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBooksByCategory();
  }, [id]);
  //------------- return -------------
  return (
    <section className="categories">
      <div className="category-book-wrapper">
        <div className="category-wrapper">
          {bookCategory.map((cateElem, index) => {
            // console.log(cateElem);
            return (
              <div className="book-in-category">
                <Link to={`/bookInfo/${cateElem._id}`}>
                  {
                    <img
                      className="book-img-category"
                      src={`${cateElem.image} `}
                      alt="img not found"
                    />
                  }
                </Link>
                <h2 className="book-title-category">{cateElem.title} </h2>
                <h2 className="book-img-price"> ${cateElem.price} </h2>
                <Rating rating={cateElem.rating} />
                <h2>{cateElem.comment} </h2>
                <div className="book-slider-icons-wrapper">
                  <i onClick={() => {}} className="bi bi-cart-plus"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Category;
