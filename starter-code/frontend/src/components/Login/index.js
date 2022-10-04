import { useState, useContext, useEffect } from "react";
import "./style.css";
import axios from "axios";
import { usertoken } from "../../App";
import { useNavigate, Link } from "react-router-dom";

//------------- login -------------
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const user = useContext(usertoken);
  const navigate = useNavigate();
  const loginUser = () => {
    axios
      .post("http://localhost:5000/users/login", {
        email,
        password,
      })
      .then((results) => {
        // console.log(results)
        // console.log(results.data.token);
        user.setToken(results.data.token);
        setMessage(results.data.message);
        localStorage.setItem("token", results.data.token);
        user.setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };
  //------------- show password -------------
  const showHidePassword = () => {
    setShowPassword((prev) => !prev);
  };
  //------------- return -------------
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Login</h1>
      <form className="form">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {showPassword ? (
          <i
            onClick={showHidePassword}
            className="bi bi-eye-slash-fill show-password-icon"
          ></i>
        ) : (
          <i
            onClick={showHidePassword}
            className="bi bi-eye-fill show-password-icon"
          ></i>
        )}

        <button type="submit" className="form-btn" onClick={loginUser}>
          Login
        </button>
      </form>
      <div className="form-footer">
        Don't have an account?{" "}
        <Link to="/" className="Form-Link">
          Register
        </Link>
      </div>

      <div className="login">
        <div>
          <label>{message}</label>
        </div>
      </div>
    </div>
  );
};
export default Login;

// useEffect(()=>{
//   navigate("/Home");
// },[])
