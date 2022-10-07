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
import Slider from "./components/Slider/slider";
import Services from "./components/Servicses/Services";
import AddToCart from "./components/AddToCart/AddToCart";
import Footer from "./components/Footer/Footer";
export const usertoken = createContext();

//------------- App -------------
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(token ? true : false);
  const [bookdata, setBookdata] = useState(null);
  const [cart, setCart] = useState([]);
  const [addtoCart, setAddtoCart] = useState([]);
  const [sliderToggle, setSliderToggle] = useState(true);

  //------------- return -------------
  return (
    <usertoken.Provider
      value={{
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        cart,
        setCart,
        sliderToggle,
        setSliderToggle,
      }}
    >
      <div className="App">
        <div className="">
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Register />
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  {" "}
                  <Login /> <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/home"
              element={
                <>
                  {" "}
                  <Header setBookdata={setBookdata} />
                  {sliderToggle && (
                    <Slider
                      sliderToggle={sliderToggle}
                      setSliderToggle={setSliderToggle}
                    />
                  )}
                  <Home bookdata={bookdata} setBookdata={setBookdata} />{" "}
                  {/* <Popupbook/> */}
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/category/:id"
              element={
                <>
                  <Header /> <Category /> <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/bookInfo/:id"
              element={
                <>
                  <Header />
                  <BookInfo />
                  <Services />
                  <Footer />{" "}
                </>
              }
            />
            <Route
              path="/cart/:id"
              element={
                <>
                  <Header />
                  <Cart />
                  <Services />
                  <Footer />{" "}
                </>
              }
            />
            <Route
              path="/cart"
              element={
                <>
                  <Header />{" "}
                  <BookInfo bookdata={bookdata} setBookdata={setBookdata} />{" "}
                  <Services />
                  <Footer />{" "}
                </>
              }
            />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </div>
      </div>
    </usertoken.Provider>
  );
}

export default App;
