import React from "react";

const Client = () => {
  return (
    <section id="clients" class="clients">
      <div class="container" data-aos="zoom-in">
        <div class="clients-slider swiper">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide">
              <img
                src="assets/img/hugg-brands/ecell.jpeg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/img/hugg-brands/images.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/img/hugg-brands/impunjab.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/img/hugg-brands/edc.jpeg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/img/hugg-brands/brandmonkey.jpeg"
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="swiper-slide">
              <img
                src="assets/img/hugg-brands/unyc.jpeg"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Client;
