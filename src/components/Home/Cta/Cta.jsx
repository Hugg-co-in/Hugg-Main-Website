import React from "react";

const Cta = () => {
  return (
    <div className="bg-bgImg2 w-[100%] bg-cover bg-fixed bg-center">
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center  py-[60px] px-0">
        <div className="text-center text-white" data-aos="zoom-in">
          <h3 className="text-3xl font-bold">
            We made a meditation portal to make you calm
          </h3>
          <p className="px:5 md:px-20 py-4">
            Are you tired of the constant hustle and bustle of everyday life?
            Does work, social media, and daily stress often leave you feeling
            overwhelmed? It's time to give yourself the gift of tranquility and
            rejuvenation. Welcome to our incredible Meditation Portal - your
            gateway to inner peace, mindfulness, and self-discovery!
          </p>
          <a
            className=" font-[600] text-[16px] inline-block py-[8px] px-[28px] rounded-[4px] transition-[0.5s] mt-[10px] border-2 border-solid border-white text-white hover:bg-[#17AD94] hover:border-[#17AD94] hover:text-black"
            href="https://meditation.hugg.co.in/">
            Meditation Portal
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
