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
            <i style={{ color: "#cb2027"}} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{  color: "#3B5998"}} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{  color: "#bb0000" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{  color: "#55ACEE" }} className="bi bi-twitter"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "darkblue" }} className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            eligendi excepturi ea neque! Totam minus est dolores quas,
            consequatur asperiores sit labore. A exercitationem tempore nisi,
            similique inventore earum dolore? Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nulla doloribus possimus veritatis
            earum repellat voluptate ab distinctio ipsa, ad repellendus sit. At
            non, soluta et quos voluptates mollitia pariatur eos?
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
