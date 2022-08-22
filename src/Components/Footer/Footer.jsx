import React from "react";
import svg1 from "../../image/Group27.svg";
import svg2 from "../../image/Group28.svg";
import svg3 from "../../image/Group29.svg";
import svg4 from "../../image/Group30.svg";
import ins1 from "../../image/Group(1).png";
import ins2 from "../../image/Layer2.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-list">
          <div className="footer-list-item">
            <div className="footer-list-item-number">
              <span>Company</span>
              <a href="#">About Us</a>
              <a href="#">Blog</a>
              <a href="#">Careers</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="footer-list-item-number">
              <span>Support</span>
              <a href="#">Help Center</a>
              <a href="#">Safety Center</a>
              <a href="#">Community</a>
            </div>
            <div className="footer-list-item-number">
              <span>Продукция</span>
              <a href="#">Mac</a>
              <a href="#">iPad</a>
              <a href="#">iPhone</a>
              <a href="#">Гаджеты</a>
            </div>
            <div className="footer-list-item-number">
              <span>Install App</span>
              <a href="https://play.google.com/store/games?hl=ru&gl=US">
                <img src={ins2} alt="app store" />
              </a>
              <a href="https://www.apple.com/app-store/">
                <img src={ins1} alt="app store" />
              </a>
            </div>
          </div>
          <div className="footer-color">
            <hr />
            <div className="footer-list-down">
              <span>Copyright 2013-2021 Code-Shop все права защищены</span>
              <div className="footer-list-down-logo">
                <a href="https://www.instagram.com/">
                  <img src={svg1} alt="instagram" />
                </a>
                <a href="#">
                  <img src={svg2} alt="" />
                </a>
                <a href="https://www.facebook.com/">
                  <img src={svg3} alt="facebook" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src={svg4} alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
