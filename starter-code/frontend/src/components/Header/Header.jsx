
import "./header.css";
import Navbar from "./Navbar"
import {useState,useContext} from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { usertoken } from "../../App";
const Header = ({setBookdata}) => {
const [toggle, setToggle] = useState(false);


//useContext
// const UserContext = createContext(setBookdata)
const bookdata = useContext(usertoken);
   //------------- search Books -------------
   const [search, setSearch] = useState("");
   const searchBooks=()=>{
    axios.get(`http://localhost:5000/books/searchbook?title=${search}`) 
    .then((results)=>{
      console.log(results);
    //   console.log(results)
      setBookdata(results.data.book);
    })
    .catch((err)=>{
      console.log(err);
    })
   }
   //------------------------------------------
  return (
    <header className="header">
        <div className ="header-top">
            <div onClick={()=>{setToggle(prev => !prev)}} className="header-top-menu">
                <i className="bi bi-list"></i>
            </div>
            <div className="header-top-phone">
            <i className="bi bi-telephone-fill"></i>
                123-456-789</div>
            {/* <div className="header-top-text">welcome to online book store 
            </div> */}
            <Link to="/login"className="header-top-link">
                <i className="bi bi-person-fill"></i>
                Login
            </Link>
        </div>
        <div className="header-middle">
            <Link to="/home" className="header-middle-logo">
                <b>Book</b>
                <i className="bi bi-book"></i>
                <b>store</b>
            </Link>
            <div className="header-middle-search-box"> 
                <input onChange={(e) => {setSearch(e.target.value) }} className="header-middle-search-input" type="text" placeholder="search in book store..."></input>
                <i onClick={searchBooks} className="bi bi-search"></i>
            </div>
            <Link to="/cart/:id" className="header-middle-cart-wrapper">
                <b className="cart-notificatiion">1</b>  
                <i className="bi bi-cart2"></i>
            
            </Link>
           
           
        </div>
        <Navbar toggle={toggle} setToggle={setToggle}/>
    </header>
  );
}

export default Header


// for search
// 1.[in frontEnd] input onchange &need ~~> this.state
// 2.[in backEnd]  func. operate search
