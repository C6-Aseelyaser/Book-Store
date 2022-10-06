import "./header.css";
import Navbar from "./Navbar";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { usertoken } from "../../App";

const Header = ({ setBookdata}) => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState("");
  const bookdata = useContext(usertoken);
  const user = useContext(usertoken);
  const navigate =useNavigate()
  console.log(user);
  const { id } = useParams();
  // const UserContext = createContext(setBookdata)

  //------------- search Books -------------
  const searchBooks = () => {
    axios
      .get(`http://localhost:5000/books/searchbook?title=${search}`)
      .then((results) => {
        console.log(results);
        //   console.log(results)
        setBookdata(results.data.book);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserCartbyId = () => {
    axios
      .get(`http://localhost:5000/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((results) => {
        user.setCart(results.data.cart);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log("cart2:",cart);
  useEffect(() => {
    getUserCartbyId();
  }, []);
  // -------------LogOut-------------
  const logout =()=>{
    localStorage.clear();
    user.setToken(null);
    user.setIsLoggedIn(false);
    navigate("/");
  }
  
  //------------------------------------------
  return (
    <header className="header">
      <div className="header-top">
        <div
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="header-top-menu"
        >
          {/* , setSliderToggle(false) */}
          <i className="bi bi-list"></i>
        </div>
        <div className="header-top-phone">
          <i className="bi bi-telephone-fill"></i>
          123-456-789
        </div>
        {/* <div className="header-top-text">welcome to online book store 
            </div> */}
<div className="header-top-links-inout">
        <Link to="/login" className="header-top-link">
          <i className="bi bi-person"></i>
          Login
        </Link> 
        
        <Link to="/"  className="header-top-link">
                logout
            </Link>
            </div>
                    {/* <div className="header-top-link" onClick={logout} >Logout</div> */}

      </div>
      <div className="header-middle">
        <Link to="/home" className="header-middle-logo">
          <b>Book</b>
          <i className="bi bi-book"></i>
          <b>store</b>
        </Link>
        <div className="header-middle-search-box">
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="header-middle-search-input"
            type="text"
            placeholder="what books are you looking for ..."
          ></input>
          <i
            onClick={() => {
              user.setSliderToggle(false);
              searchBooks();
            }}
            className="bi bi-search"
          ></i>
        </div>
        <Link to="/cart/:id" className="header-middle-cart-wrapper">
          <b className="cart-notificatiion">{user.cart.length}</b>
          <i className="bi bi-cart2"></i>
        </Link>
      </div>
      <Navbar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
// onClick={() => setSliderToggle(false) }
