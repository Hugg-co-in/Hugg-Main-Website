import React from "react";

import { Laugh, Smartphone, UsersRound } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="bg-bgImg1 w-full h-[100vh] max-[480px]:h-full bg-cover bg-fixed bg-center">
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
        <div className="relative text-center">
          <div className="flex flex-row justify-center">
            <div className="md:w-1/2 lg:w-2/3 text-white">
              <h1 className="text-6xl max-[767px]:mt-8 max-[767px]:text-4xl font-bold ">
                your mental wellbeing partner
                <span className="text-[#17AD94]">.</span>
              </h1>
              <h2 className="ml-3 text-2xl max-[480px]:text-xl mt-3">
                making therapy accessible and affordable
              </h2>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="md:w-3/4 mx-auto max-[767px]:mx-2 max-[767px]:py-8 md:pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <Laugh className="w-9 h-9" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <a
                    href="inner-page.html"
                    className="text-white transition ease-in-out duration-300 hover:text-[#17AD94]">
                    Psycho&nbsp;Therapy
                  </a>
                </h3>
              </div>

              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <Smartphone className="w-9 h-9" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <a
                    href="https://topmate.io/have_a_hugg/282956"
                    className="text-white transition ease-in-out duration-300 hover:text-[#17AD94] hover:border-[#17AD94]">
                    Digital&nbsp;Products
                  </a>
                </h3>
              </div>

              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94] ">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <UsersRound className="w-9 h-9" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <a
                    href="https://topmate.io/have_a_hugg/178051?coupon_code=STUDENTs"
                    className="text-white transition ease-in-out duration-300 hover:text-[#17AD94] hover:border-[#17AD94]">
                    Group&nbsp;Therapy
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
