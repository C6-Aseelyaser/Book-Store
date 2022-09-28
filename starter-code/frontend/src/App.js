import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { createContext, useState } from "react";
export const usertoken = createContext();


function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <usertoken.Provider value={{ token, setToken }}>
      <div className="App">
        <h1>Book Store</h1>
        <div className="">
          <Navigation />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
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
