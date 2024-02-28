import React, { useEffect } from "react";

import { Smile, Users, Clock, Award } from "lucide-react";
import CountBox from "./CountBox";
import smileImg from "../../../assets/img/smiles.jpg";

const Counts = () => {
  return (
    <section>
      <div
        className="flex flex-col min-[1180px]:flex-row px-0 sm:px-12 py-12"
        data-aos="fade-up">
        <div className="flex items-stretch justify-center h-96 w-full ">
          <img
            src={smileImg}
            className="object-cover w-full min-h-[400px]"
            data-aos="fade-right"
            data-aos-delay="100"
          />
        </div>

        <div
          className="flex flex-col justify-center py-8 px-2 min-[1180px]:ml-8"
          data-aos="fade-left"
          data-aos-delay="100">
          <h3 className="font-bold text-4xl text-black">
            We are spreading smiles
          </h3>
          <p className=" mb-0">
            We are on a mission to make mental health accessible and affordable.
            We assure you to make you smile and with every service we assure
            mental health wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <CountBox
              Icon={Smile}
              data={"412"}
              contentPart1={"Bookings in 9 months."}
              contentPart2={"We are happy to serve you and make you smile"}
            />
            <CountBox
              Icon={Users}
              data={"25"}
              contentPart1={"Psychologists"}
              contentPart2={
                "are on our platform, you can book your session with them"
              }
            />
            <CountBox
              Icon={Clock}
              data={"10300"}
              contentPart1={"Minutes heard"}
              contentPart2={"by psychologists and space to say your heart out"}
            />
            <CountBox
              Icon={Award}
              data={"3"}
              contentPart1={"Awards"}
              contentPart2={
                "in past 10 months, we are recoganized as Punjab's Emerging Startup"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
