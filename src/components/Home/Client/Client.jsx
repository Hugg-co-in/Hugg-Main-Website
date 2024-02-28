import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Client = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-in">
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide">
              <img
                src="assets/img/hugg-brands/ecell.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/hugg-brands/images.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/hugg-brands/impunjab.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/hugg-brands/edc.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/hugg-brands/brandmonkey.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                src="assets/img/hugg-brands/unyc.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Client;
