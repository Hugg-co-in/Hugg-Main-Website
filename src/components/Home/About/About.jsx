import React, { useEffect } from "react";
import { CheckCheck } from "lucide-react";
import psychologistsImg from "../../../assets/img/psychologists-1.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="about-us" className="container max-[767px]:p-2 pt-24">
      <div className="flex md:flex-row flex-col " data-aos="fade-up">
        <div
          className="md:w-3/4 order-1 md:order-2"
          data-aos="fade-left"
          data-aos-delay="100">
          <img src={psychologistsImg} />
        </div>
        <div
          className="md:w-3/4 pt-4 pt-lg-0 order-2 md:order-1"
          data-aos="fade-right"
          data-aos-delay="100">
          <h3 className="font-bold text-3xl">
            We assure you to bring smile on your face
          </h3>
          <p className="italic">
            We are backed by best psychologists to support your mental
            wellbeing.
          </p>
          <ul>
            <li className="relative pb-2">
              <span className="pr-8">
                <CheckCheck className="text-xl absolute text-[#17AD94]" />
              </span>
              {/* <i className="ri-check-double-line"></i> */}
              Best therapist who will listen to you
            </li>
            <li className="relative pb-2">
              <span className="pr-8">
                <CheckCheck className="text-xl absolute text-[#17AD94]" />
              </span>
              Privacy and confidentiality.
            </li>
            <li className="relative pb-2">
              <span className="pr-8">
                <CheckCheck className="text-xl absolute text-[#17AD94]" />
              </span>
              Most affordable therapy provider
            </li>
          </ul>
          <p>
            Online Therapy will make you de-stress and you will be able to get
            things off your chest with no judgements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
