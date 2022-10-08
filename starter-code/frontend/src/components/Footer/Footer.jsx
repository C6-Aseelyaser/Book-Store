import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "green" }} className="bi bi-whatsapp"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#3B5998" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#bb0000" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "#55ACEE" }} className="bi bi-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Refund policy</li>
            <li className="footer-link">Stores Location</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Terms of Service</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Jordan - Amman
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              123-456-789
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              info@BookStore.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            The bookStore.com Books homepage helps you explore Earth's Biggest
            Bookstore without ever leaving the comfort of your couch. Here
            you'll find current best sellers in books, new releases in books,
            deals in books, Kindle eBooks, Audible audiobooks, and so much more.
            We have popular genres like Literature & Fiction, Children's Books,
            Mystery & Thrillers, Cooking, Comics & Graphic Novels, Romance,
            Science Fiction & Fantasy, and Amazon programs such as Best Books of
            the Month
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
