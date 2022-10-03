
import "./header.css";
import Navbar from "./Navbar"
import {useState} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
const Header = () => {
const [toggle, seTtoggle] = useState(false);

   //------------- search Books -------------
   const [search, setSearch] = useState([]);
   const searchBooks=()=>{
    axios.get("http://localhost:5000/books/searchbook")
    .then((results)=>{
      console.log(results);
      // setSearch(results.data.book);
    })
    .catch((err)=>{
      console.log(err);
    })
   }
  return (
    <header className="header">
        <div className ="header-top">
            <div className="header-top-menu">
                <i className="bi bi-list"></i>
            </div>
            <div className="header-top-phone">
            <i className="bi bi-telephone-fill"></i>
                123-456-789</div>
            <div className="header-top-text">welcome to online book store 
            </div>
            <div className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Login
            </div>
        </div>
        <div className="header-middle">
            <div className="header-middle-logo">
                <b>Book</b>
                <i className="bi bi-book"></i>
                <b>store</b>
            </div>
            <div className="header-middle-search-box"> 
                <input onChange={(e) => {setSearch(e.target.value) }} className="header-middle-search-input" type="search" placeholder="search in book store ..."></input>
                <i className="bi bi-search"></i>
            </div>
            <Link to="/cart" className="header-middle-cart-wrapper">
                <i className="bi bi-cart2"></i>
            
            </Link>
           
        </div>
        <Navbar/>
    </header>
  );
}

export default Header


// for search
// 1.[in frontEnd] input onchange &need ~~> this.state
// 2.[in backEnd]  func. operate search
