import { useState, useContext,useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


// useEffect(()=>{
//   navigate("/dashboard");
// },[])
  const loginUser = () => {
    axios
      .post("http://localhost:5000/users/login", {
        email,
        password,
      })
      .then((results) => {
console.log(results)
        setMessage(results.data.message);


        // navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);

        setMessage(error.response.data.message);
      });
  };

  return (
    <div className="loginContainer">
      <div className="login">
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
        <div>
        <label>{message}</label>
        </div>

        <button type="submit" className="loginin" onClick={loginUser}>
          Login
        </button>


      </div>
    </div>
  );
};
export default Login;












// import React from "react";

// const Login = () => {
//   return <div>Login</div>;
// };
// export default Login;




