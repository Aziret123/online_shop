import React from "react";
import Carousel from "react-bootstrap/Carousel";
import pic2 from "../../../image/sng-pc_0bwqivq.webp";
import pic1 from "../../../image/custom-pc_AM7jmx5.webp";
import pic3 from "../../../image/cashback-card-pc.webp";
import "./billboard.css";

const Billboard = () => {
  return (
    <>
      <div className="carousel-bil">
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100" src={pic2} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic1} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={pic3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="billboard">
        <div className="billboard__left">
          <div className="left__text">
            <h2>Приходи в Code-shop,</h2>
            <h3>совершай покупку и получай Кешбэк до 30%</h3>
          </div>
          <p>
            <span className="sp">И не забудь</span> про удобную <br /> рассрочку
            до 12 месяцев от ведущих банков.
          </p>
        </div>
        <div className="billboard__right">
          <iframe
            width="500"
            height="300"
            src="https://www.youtube.com/embed/otQF0wkvuwI"
            title="How to Shoot & Edit Dramatic Summer Light on iPhone | Apple"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Billboard;
