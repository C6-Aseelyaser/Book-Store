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
import Slider from "./components/Slider/slider"
export const usertoken = createContext();


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <usertoken.Provider value={{ token, setToken }}>
      <div className="App">
        {/* <h1>Book Store</h1> */}
        <div className="">
        {/* <Header/>
        <Slider/> */}
          <Navigation />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/bookInfo/:id" element={<BookInfo/>}/>
            <Route path="/cart/:id" element={<Cart/>}/>
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
