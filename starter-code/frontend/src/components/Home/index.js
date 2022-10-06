import { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { usertoken } from "../../App";
import { useNavigate, Link } from "react-router-dom";
import Rating from "./Rating";
import Popupbook from "../Popupbook/Popupbook";
import BookInfo from "../Bookinfo";
//-----------------------------------------------
function Home({ bookdata, setBookdata }) {
  const user = useContext(usertoken);
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);
  const [userId, setUserId] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  //------------- handleOpenPopup -------------
  const handleOpenPopup = (bookdata) => {
    setOpenPopup(true);
    setBookdata(bookdata);
    console.log(bookdata);
  };
  //------------- handleClick -------------
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
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
        // console.log(results.data.userId);
        setCategory(results.data.title);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllBooks();
  }, []);
  //-------------get All Books-------------
  // const [books, setBooks] = useState([]);
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
        setBookdata(results.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //-----------------------------------------------------------
  return (
    <div className="book-slider-container">
      <i
        onClick={() => handleClick("left")}
        className="bi bi-chevron-left book-slider-arrow-left"
      ></i>

      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {bookdata?.map((booksElem, index) => {
          //   console.log(booksElem);
          return (
            <Link
              to={`/bookInfo/${booksElem._id}`}
              key={booksElem.id}
              className="book-slide-item"
            >
            
                
                  <img
                    className="book-slide-item-img"
                    src={`${booksElem.image} `}
                    alt="img not found"
                  />
                
          

              <h2 className="book-slide-item-title">{booksElem.title} </h2>
              {/* <div className="rating">rating:{booksElem.rating}</div> */}
              <div className="rating">
                <Rating rating={booksElem.rating} />
              </div>

              <div className="book-slide-item-price">${booksElem.price} </div>
              <div className="book-slider-icons-wrapper">
                {/* <i onClick={()=>{handleOpenPopup(booksElem)}} className="bi bi-eye-fill"></i> */}
                <i onClick={() => {}} className="bi bi-cart-plus"></i>
              </div>

              {/* <h2>{booksElem.description} </h2>
              <h2>{booksElem.price} </h2>
              <h2 className="book-slide-item-rating"> </h2> */}
            </Link>
                  
          );
        })}
      </div>

      <i
        onClick={() => handleClick("right")}
        className="bi bi-chevron-right book-slider-arrow-right"
      ></i>

      {openPopup && (
        <Popupbook bookdata={bookdata} setOpenPopup={setOpenPopup} />
      )}
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
