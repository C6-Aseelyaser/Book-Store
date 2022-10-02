import React from "react";
import "./popupbook.css";
import Rating from "../Home/Rating";
import BookInfo from "../Bookinfo";

const Popupbook = (bookdata, setOpenPopup) => {
  //
  return (
    <div clsssName="popupbook-container">
      <div className="popupbook-content">
        <i
          onClick={() => setOpenPopup(false)}
          className="bi bi-x-circle-fill popup-icon"
        ></i>
        <div className="popupbook-content-img">
          <img src={`/bookInfo/:i${""}`} alt="notfound" />
        </div>
        <div className="popupbook-content-info">
          <h5 className="popupbook-content-info-title">"title"</h5>
        </div>
        <Rating rating={""} />
        <div className="popupbook-content-info-author">
          <b>Author:</b>
          {""}
        </div>
        <div className="popupbook-content-info-price">
          <b>price:</b>
          {""}
        </div>
        <div className="popupbook-add-to-cart">
          <input
            className="popupbook-add-to-cart-input"
            type="number"
            min="1"
            max="100"
          />
          <button className="popupbook-add-to-cart-btn">
            <i className="bi bi-cart-plus"></i>
            Add To Cart
          </button>
        </div>
        {/* <div className="popupbook-content-info-link">
            See More Detatils
        </div> */}
      </div>
    </div>
  );
};

export default Popupbook;
