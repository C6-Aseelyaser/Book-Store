import { useState } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
//------------- register -------------
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("6336a074755caeb97c2afab3");
  const [message, setMessage] = useState("");
  
  const navigate = useNavigate();
  //------------- register Click -------------
  const registerClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users/", {
        firstName,
        lastName,
        age,
        country,
        email,
        password,
        role,
      })
      .then((results) => {
        console.log(results);
        setMessage(results.data.message);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };
  //------------- return -------------
  return (
    <div className="form-wrapper">
      <h1 className="form-title">Create New Account</h1>
      <form className="form">
        <input
          className="registerContainer-input"
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className="registerContainer-input"
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          className="registerContainer-input"
          type="text"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          className="registerContainer-input"
          type="text"
          placeholder="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          className="registerContainer-input"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="registerContainer-input"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="form-btn" onClick={registerClick}>
          Register
        </button>
      </form>
      <div className="form-footer">
        Already have an account?{" "}
        <Link to="/login" className="Form-Link">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Register;
