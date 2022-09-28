import {useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { usertoken } from "../../App";
  //------------------------------------------
const Navigation = () => {
  const navigate = useNavigate();
  const user = useContext(usertoken);
  console.log(user);
  
  return (
    <div className="navBar">
      <div
        className="navLink"
        onClick={() => {
          navigate("/");
        }}
      >
        Register
      </div>
      <div
        className="login"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </div>
      <div
        className="home"
        onClick={() => {
          navigate("/home");
        }}
      >
        Home
      </div>
    </div>
  );
};
export default Navigation;
