import React from "react";

import { Laugh, Smartphone, UsersRound } from "lucide-react";

const HomePart1 = () => {
  return (
    // <!-- ======= Hero Section ======= -->

    <section className="bg-bgImg1 w-[100%] h-[100vh] bg-cover bg-fixed">
      <div className="bg-black bg-opacity-60 w-full h-full  flex items-center justify-center">
        <div class="relative pt-[74px] text-center">
          <div
            class="flex flex-row justify-center"
            data-aos="fade-up"
            data-aos-delay="150">
            <div class="md:w-1/2 lg:w-2/3">
              <h1 className="m-0 text-[56px] max-[767px]:text-[28px] font-bold leading-[64px] text-[#fff]">
                your mental wellbeing partner
                <span className="text-[#17AD94]">.</span>
              </h1>
              <h2 className=" text-[#FFFFFFE6] ml-[10px] text-[24px] mt-10">
                making therapy accessible and affordable
              </h2>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div className="md:w-3/4 mx-auto max-[767px]:mx-2">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div class="py-[30px] px-[20px] transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <Laugh className="w-[36px] h-[36px]" />
                </span>
                <h3 className="font-bold p-0 leading-[26px] text-[20px]">
                  <a
                    href="inner-page.html"
                    className="text-white transition ease-in-out duration-300 hover:text-[#17AD94]">
                    Psycho&nbsp;Therapy
                  </a>
                </h3>
              </div>

              <div class="py-[30px] px-[20px] transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <Smartphone className="w-[36px] h-[36px]" />
                </span>
                <h3 className="font-bold p-0 leading-[26px] text-[20px]">
                  <a
                    href="https://topmate.io/have_a_hugg/282956"
                    className="text-white transition ease-in-out duration-300 hover:text-[#17AD94] hover:border-[#17AD94]">
                    Digital&nbsp;Products
                  </a>
                </h3>
              </div>

              <div class="py-[30px] px-[20px] transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <UsersRound className="w-[36px] h-[36px]" />
                </span>
                <h3 className="font-bold p-0 leading-[26px] text-[20px]">
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

export default HomePart1;
