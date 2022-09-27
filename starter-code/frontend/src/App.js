import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import AddBook from "./components/Book";


function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <div className="">
        <Navigation />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Books" element={<AddBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
