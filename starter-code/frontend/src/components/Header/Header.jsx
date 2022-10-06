import "./header.css";
import Navbar from "./Navbar"
import {useState,useContext,useEffect} from "react";
import axios from "axios"
import { Link ,useParams} from "react-router-dom";
import { usertoken } from "../../App";



const Header = ({setBookdata}) => {
const [toggle, setToggle] = useState(false);
const [search, setSearch] = useState("");
const bookdata = useContext(usertoken);
const user = useContext(usertoken);
const { id } = useParams();
// const UserContext = createContext(setBookdata)

   //------------- search Books -------------
   const searchBooks=({sliderToggle ,setSliderToggle})=>{
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
     // -------------create New Cart ~~>[add book to cart]-------------
  const [addtoCart, setAddtoCart] = useState([]); 
  const [quantity, setQuantity] = useState(1);

  const createNewCart = () => {
    axios
      .post(
        "http://localhost:5000/cart",
        {
          book: id,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((results) => {
        console.log(results);      
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {

  }, []);
   //------------------------------------------
  return (
    <header className="header">
        <div className ="header-top">
            <div onClick={()=>{setToggle(prev => !prev) } }  className="header-top-menu">
            {/* , setSliderToggle(false) */}
                <i className="bi bi-list"></i>
            </div>
            <div className="header-top-phone">
            <i className="bi bi-telephone-fill"></i>
                123-456-789</div>
            {/* <div className="header-top-text">welcome to online book store 
            </div> */}
            <Link to="/login"className="header-top-link">
                <i className="bi bi-person"></i>
                Login
            </Link>
            {/* <Link to="/logout"className="header-top-link">
                <i className="bi bi-person"></i>
                logout
            </Link> */}
        </div>
        <div className="header-middle">
            <Link to="/home" className="header-middle-logo">
                <b>Book</b>
                <i className="bi bi-book"></i>
                <b>store</b>
            </Link>
            <div className="header-middle-search-box"> 
                <input onChange={(e) => {setSearch(e.target.value) }} className="header-middle-search-input" type="text" placeholder="what books are you looking for ..."></input>
                <i onClick={searchBooks} className="bi bi-search"></i>
            </div>
            <Link to="/cart/:id" className="header-middle-cart-wrapper">
                <b className="cart-notificatiion">{addtoCart.length}</b> 
                {/* {addtoCart.length > 0 && (<b className="cart-notificatiion">{addtoCart.length}</b> )}  */}
                <i className="bi bi-cart2"></i>
            
            </Link>
           
           
        </div>
        <Navbar toggle={toggle} setToggle={setToggle}/>
    </header>
  );
}

export default Header

