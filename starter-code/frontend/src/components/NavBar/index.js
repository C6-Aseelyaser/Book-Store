import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
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
        className="bokks"
        onClick={() => {
          navigate("/Books");
        }}
      >
        Books
      </div>
    </div>
  );
};
export default Navigation;
