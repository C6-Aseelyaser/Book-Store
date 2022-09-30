
import "./header.css";
import Navbar from "./Navbar"
import {useState} from "react";
const Header = () => {
// const [toggle, seTtoggle] = useState(false);
  return (
    <header className="header">
        <div className ="header-top">
            <div className="header-top-menu">
                <i className="bi bi-list"></i>
            </div>
            <div className="header-top-phone">
            <i className="bi bi-telephone-fill"></i>
                123456</div>
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
                <input className="header-middle-search-input" type="search" placeholder="search in book store ..."></input>
                <i className="bi bi-search"></i>
            </div>
            <div className="header-middle-cart-wrapper">
                <i className="bi bi-cart2"></i>
            
            </div>
           
        </div>
        <Navbar/>
    </header>
  );
}

export default Header
