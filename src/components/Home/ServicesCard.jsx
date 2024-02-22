import React from "react";

const ServicesCard = ({ Icon, url, heading, para }) => {
  return (
    <div class="flex w-full h-full">
      <div class="icon-box text-center border border-solid border-[#ebebeb] py-[80px] px-[20px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-40  duration-300 hover:border-white hover:shadow-[0_0px_25px_0px_rgba(0,0,0,0.1)] w-full h-full">
        <div class="my-0 mx-auto bg-[#17AD94] w-[64px] h-[64px] rounded-sm flex items-center justify-center mb-[40px] ">
          <Icon class="text-black" />
        </div>
        <h4 className="font-bold mb-[15px] text-[24px]">
          <a href={url} className="text-black hover:text-[#17AD94]">
            {heading}
          </a>
        </h4>
        <p className="leading-[24px] text-[14px] mb-0">{para}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
