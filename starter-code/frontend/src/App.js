import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Category from "./components/category";
import BookInfo from "./components/Bookinfo";
import Cart from "./components/Cart";
import { createContext, useState } from "react";
import Header from "./components/Header/Header";
// import Slider from "./components/Slider/slider";
import Services from "./components/Servicses/Services";
// import AddToCart from "./components/AddToCart/AddToCart";
import Footer from "./components/Footer/Footer";
export const usertoken = createContext();

 //------------- App -------------
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
   //------------- return -------------
  return (
    <usertoken.Provider value={{ token, setToken }}>
      <div className="App">
        {/* <h1>Book Store</h1> */}
        <div className="">
        <Header/>
        {/* <Slider/> */}
        <Services/>
        <Footer/>
          <Navigation />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/bookInfo/:id" element={<BookInfo/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
            <Route path="/cart" element={<BookInfo/>}/>
          </Routes>
        </div>
      </div>
    </usertoken.Provider>
  );
}

export default App;
{
  /* <Route path="/Admin" element={<AddBook />} /> */
}
// import AddBook from "./components/Admin";
