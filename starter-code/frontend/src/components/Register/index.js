import { useState } from "react";
import "./style.css";
import axios from "axios";

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

  const registerClick = () => {
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
      })
      .catch((error) => {
        console.log(error);
        setMessage(error.response.data.message);
      });
  };

 //------------- return -------------
  return (
    <div className="registerContainer">
      <div className="register">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" className="registerbtn" onClick={registerClick}>
          Register
        </button>
      </div>
    </div>
  );
};
export default Register;

