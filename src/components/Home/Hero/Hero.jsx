import React from "react";
import { ArrowUp, Laugh, Smartphone, UsersRound } from "lucide-react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-bgImg1 w-full h-[100vh] max-[480px]:h-full bg-cover bg-fixed bg-center">
      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
        <div className="relative text-center" data-aos="fade-up">
          <div
            className="flex flex-row justify-center "
            data-aos="fade-up"
            data-aos-delay="150">
            <div className="md:w-1/2 lg:w-2/3 text-white">
              <h1
                className="text-6xl max-[767px]:mt-8 max-[767px]:text-4xl font-bold "
                data-aos="fade-up">
                your mental wellbeing partner
                <span className="text-[#17AD94]">.</span>
              </h1>
              <h2 className="ml-3 text-2xl max-[480px]:text-xl mt-3">
                making therapy accessible and affordable
              </h2>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          <div
            className="md:w-3/4 mx-auto max-[767px]:mx-2 max-[767px]:py-8 md:pt-16"
            data-aos="zoom-in"
            data-aos-delay="250">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <Laugh className="w-9 h-9" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <span className="text-white transition ease-in-out duration-300 hover:text-[#17AD94]">
                    <a href="inner-page.html">Psycho&nbsp;Therapy</a>
                  </span>
                </h3>
              </div>

              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94]">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <Smartphone className="w-9 h-9" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <span className="text-white transition ease-in-out duration-300 hover:text-[#17AD94] hover:border-[#17AD94]">
                    <a href="https://topmate.io/have_a_hugg/282956">
                      Digital&nbsp;Products
                    </a>
                  </span>
                </h3>
              </div>

              <div className="py-8 px-5 transition ease-in-out duration-300 border border-white border-opacity-30 h-full hover:border-[#17AD94] ">
                <span className="flex text-[#17AD94] place-content-center mb-3">
                  <UsersRound className="w-9 h-9" />
                </span>
                <h3 className="font-bold p-0 text-xl">
                  <span className="text-white transition ease-in-out duration-300 hover:text-[#17AD94] hover:border-[#17AD94]">
                    <a href="https://topmate.io/have_a_hugg/178051?coupon_code=STUDENTs">
                      Group&nbsp;Therapy
                    </a>
                  </span>
                </h3>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------- */}

          <div className=" flex flex-col fixed bottom-8 right-4">
            <div className="flex mb-4">
              <a
                href="https://chat.whatsapp.com/GxM1U1YXKNFFwsFGIKlflB"
                target="_blank"
                className="bg-green-500 rounded-full shadow-md">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.16156 47.9359L3.52765 35.6439C1.45131 32.0462 0.359162 27.9653 0.360688 23.7844C0.366028 10.705 11.0098 0.0639038 24.0889 0.0639038C30.4358 0.0665741 36.3932 2.53697 40.8732 7.02075C45.3528 11.5045 47.819 17.4646 47.8167 23.8035C47.811 36.8825 37.1657 47.5251 24.0889 47.5251C24.0881 47.5251 24.0893 47.5251 24.0889 47.5251H24.0786C20.1075 47.5236 16.2058 46.5276 12.7402 44.6374L0.16156 47.9359ZM13.3227 40.3432L14.0433 40.7701C17.0706 42.5668 20.5416 43.517 24.0813 43.5189H24.0889C34.9585 43.5189 43.8056 34.6734 43.8101 23.8019C43.8121 18.5335 41.7628 13.5793 38.0393 9.85277C34.3154 6.12621 29.3643 4.07276 24.0961 4.07047C13.2178 4.07047 4.37108 12.9148 4.36689 23.7859C4.36536 27.5113 5.40754 31.1391 7.38203 34.2786L7.85124 35.0248L5.85844 42.3001L13.3227 40.3432Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.1585 13.8678C17.7145 12.8805 17.2468 12.8607 16.8241 12.8435C16.4785 12.8287 16.0829 12.8294 15.6881 12.8294C15.2929 12.8294 14.6505 12.9782 14.1073 13.5714C13.5637 14.1646 12.0317 15.5989 12.0317 18.516C12.0317 21.4335 14.1565 24.2522 14.4529 24.6482C14.7493 25.0438 18.5545 31.2213 24.5805 33.5979C29.5888 35.5731 30.6077 35.1802 31.6949 35.0814C32.7821 34.9826 35.2025 33.6471 35.6965 32.2627C36.1909 30.8784 36.1909 29.692 36.0425 29.4436C35.8941 29.1968 35.4989 29.0484 34.9061 28.752C34.3133 28.4556 31.3985 27.0209 30.8549 26.8233C30.3113 26.6253 29.9161 26.5269 29.5209 27.1205C29.1254 27.7133 27.9901 29.0484 27.6441 29.4436C27.2981 29.84 26.9521 29.8896 26.3593 29.5928C25.7665 29.2956 23.8569 28.67 21.5917 26.6501C19.8293 25.0788 18.6392 23.1379 18.2932 22.5444C17.9476 21.9515 18.2874 21.6586 18.5537 21.3347C19.0332 20.7514 19.8377 19.7028 20.0353 19.3076C20.2329 18.9116 20.1341 18.5656 19.9861 18.2688C19.8377 17.9724 18.6853 15.0404 18.1585 13.8678V13.8678Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
            <div className=" flex">
              <AnchorLink href="#hero">
                <div className=" shadow-md mx-auto bg-[#17AD94] w-12 h-12 rounded-sm flex items-center justify-center ">
                  <ArrowUp className="text-black" />
                </div>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
