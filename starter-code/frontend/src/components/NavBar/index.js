import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { usertoken } from "../../App";
import Login from "../Login";
//------------- Navigation -------------
const Navigation = () => {
  const navigate = useNavigate();
  const user = useContext(usertoken);
  console.log(user);
  //------------- Logout -------------
  const LogOut = () => {
    localStorage.clear();
    user.setToken(null);
    user.setIsLoggedIn(false);
    navigate("/login");
  };
  //------------- return -------------
  return (
    <div className="navBar">
    </div>
  );
};
export default Navigation;

