import React from "react";
import { Card } from "../ui/card";
import { CheckCheck } from "lucide-react";
import psychologistsImg from "../../assets/img/psychologists-1.png";

const HomePart2 = () => {
  return (
    // <!-- ======= About Section ======= -->
    <Card class=" border-none">
      <section>
        <div class="container flex md:flex-row flex-col">
          <div
            class="col-lg-6 md:w-3/4 order-1 md:order-2"
            data-aos="fade-left"
            data-aos-delay="100">
            <img src={psychologistsImg} class="img-fluid" alt="" />
          </div>
          <div
            class="col-lg-6 md:w-3/4 pt-4 pt-lg-0 order-2 md:order-1"
            data-aos="fade-right"
            data-aos-delay="100">
            <h3 className=" font-bold text-[28px]">
              We assure you to bring smile on your face
            </h3>
            <p class="italic">
              We are backed by best psychologists to support your mental
              wellbeing.
            </p>
            <ul>
              <li className="relative pb-[8px]">
                <span className="pr-[30px]">
                  <CheckCheck className="text-[20px] absolute text-[#17AD94]" />
                </span>
                {/* <i class="ri-check-double-line"></i> */}
                Best therapist who will listen to you
              </li>
              <li className="relative pb-[8px]">
                <span className="pr-[30px]">
                  <CheckCheck className=" text-[20px] absolute text-[#17AD94]" />
                </span>
                Privacy and confidentiality.
              </li>
              <li className="relative pb-[8px]">
                <span className="pr-[30px]">
                  <CheckCheck className=" text-[20px] absolute text-[#17AD94]" />
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
    </Card>
    //   <!-- End About Section -->
  );
};

export default HomePart2;
