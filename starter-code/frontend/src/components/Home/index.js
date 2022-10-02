//change
import { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { usertoken } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import Rating from "./Rating";
import Popupbook from "../Popupbook/Popupbook";
function Home() {
  const user = useContext(usertoken);
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);

  const [userId, setUserId] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [bookdata, setBookdata] = useState(null);
 //------------- handleOpenPopup -------------
 const handleOpenPopup = (books) => {
  setOpenPopup(true);
  setBookdata(books);
  console.log(books);
 }
  //------------- handleClick -------------
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  // console.log(category);
  // console.log(setCategory);
  // console.log(userId);
  // console.log(setUserId);
  //   console.log("Home L 12");
  //-------------get All Category-------------
  const getAllcategory = () => {
    axios
      .get("http://localhost:5000/catogory", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        // console.log(results.data);
        setCategory(results.data.title);
        // console.log(results.data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //filter
  useEffect(() => {
    getAllcategory();
    getAllBooks();
  }, []);
  //-------------get All Books-------------
  const [books, setBooks] = useState([]);
  const getAllBooks = () => {
    axios
      .get("http://localhost:5000/books", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        // console.log(results);
        // console.log(results.data);
        setBooks(results.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //-----------------------------------------------------------
  // make onClick for Specific category
  return (
    <div className="book-slider-container">
      <div className="bookcategory-slider-wrapper">
        {category.map((categoryElem, index) => {
          // console.log(categoryElem);
          // to go to other component must use  LINK or useNavigate hook
          //to be able to use hook or Link must be imported
          return (
            <div>
              <Link to={`/category/${categoryElem._id}`}>
                {categoryElem.title}
              </Link>
            </div>
          );
        })}
      </div>
      {slideIndex >= 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}

      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {books.map((booksElem, index) => {
          //   console.log(booksElem);
          return (
            <div key={booksElem.id} className="book-slide-item">
              <Link to={`/bookInfo/${booksElem._id}`}>
                {
                  <img
                    className="book-slide-item-img"
                    src={`${booksElem.image} `}
                    alt="img not found"
                  />
                }
              </Link>

              <h2 className="book-slide-item-title">{booksElem.title} </h2>
              {/* <div className="rating">rating:{booksElem.rating}</div> */}
              <div className="rating">
                <Rating rating={booksElem.rating} />
              </div>

              <div className="book-slide-item-price">${booksElem.price} </div>
              <div className="book-slider-icons-wrapper">
                <i onClick={()=>{handleOpenPopup(booksElem)}} className="bi bi-eye-fill"></i>
                <i onClick={()=>{}} className="bi bi-cart-plus"></i>
              </div>

              
              {/* <h2>{booksElem.description} </h2>
              <h2>{booksElem.price} </h2>
              <h2 className="book-slide-item-rating"> </h2> */}
            </div>
          );
        })}
      </div>
      {slideIndex <= 1 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"
        ></i>
      )}
      {openPopup && <Popupbook bookdata={bookdata} setOpenPopup={setOpenPopup}/>}
    </div>
  );
}

export default Home;

/*
      filter.getAllcategory((elem,i)=>{
        return(
          setCategory(results)
        )
      })
      */

//addSeach
