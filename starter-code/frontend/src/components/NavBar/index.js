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
                <div
            className="navLink"
            onClick={() => {
              navigate("/");
            }}
          >
            Register
          </div>
      {!user.setIsLoggedIn ? (
        <div className="notLogin-or-notRegister">
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
        </div>
      ) : (
        <div>
          <div
            className="home"
            onClick={() => {
              navigate("/home");
            }}
          >
            Home
          </div>

          <div
            className="navLink"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go back{" "}
          </div>

          <div className="navLink" onClick={LogOut}>
            Log out{" "}
          </div>
        </div>
      )}
    </div>
  );
};
export default Navigation;
{
  /* <div
        className="category"
        onClick={() => {
          navigate("/category");
        }}
      >
        category
      </div>
      <div
        className="bookInfo"
        onClick={() => {
          navigate("/bookInfo");
        }}
      >
        bookInfo
      </div> */
}
