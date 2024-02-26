import React from "react";
import { Smile, Users, Clock, Award } from "lucide-react";
const CountBox = ({ Icon, data, contentPart1, contentPart2 }) => {
  return (
    <div class="">
      <div class="flex flex-row">
        <span className="text-4xl float-left my-auto">
          <Icon className="text-[#17AD94] w-12 h-10" />
        </span>
        <span className="flex flex-col ml-5">
          <h1 className="text-4xl leading-8 block font-bold text-black">
            {data}
          </h1>
          <p className=" pt-4 text-xs text-[#3b3b3b]">
            <strong>{contentPart1}</strong> {contentPart2}
          </p>
        </span>
      </div>
    </div>
  );
};

export default CountBox;
