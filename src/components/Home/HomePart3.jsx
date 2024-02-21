import React from "react";
import { Card } from "../ui/card";
import img1 from "../../assets/img/A VIRTUAL-HUG.png";
import { SquareUser, Wifi, ReceiptText, Shield } from "lucide-react";

const HomePart3 = () => {
  return (
    //  <!-- ======= Features Section ======= -->
    <section id="features" class="features pt-[20px]">
      <div class="container" data-aos="fade-up">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div class="" data-aos="fade-right">
            <img src={img1} className="min-h-[400px]" />
          </div>
          <div class="col-lg-6 " data-aos="fade-left" data-aos-delay="100">
            <div class="flex flex-row" data-aos="zoom-in" data-aos-delay="150">
              <span className="my-auto">
                <SquareUser className=" text-[#17AD94] w-[48px] h-[48px]" />
              </span>
              {/* <i class="bi-person-badge"></i> */}
              <span className="ml-[20px]">
                <h4 className="text-[20px] font-bold mb-[10px]">
                  One-on-One therapy
                </h4>
                <p className="text-[15px] text-[#848484]">
                  Only psychologist and you, so you can say your heart out
                </p>
              </span>
            </div>
            <div
              class="flex flex-row mt-10"
              data-aos="zoom-in"
              data-aos-delay="150">
              <span className="my-auto">
                <Wifi className="text-[#17AD94] w-[48px] h-[48px]" />
              </span>
              <span className="ml-[20px]">
                <h4 className="text-[20px] font-bold mb-[10px]">
                  Totally Online
                </h4>
                <p className=" text-[15px] text-[#848484]">
                  You can take theapy whenever you want, all online
                </p>
              </span>
            </div>
            <div
              class="flex flex-row mt-10"
              data-aos="zoom-in"
              data-aos-delay="150">
              <span className="my-auto">
                <ReceiptText className=" text-[#17AD94] w-[48px] h-[48px]" />
              </span>
              <span className="ml-[20px]">
                <h4 className="text-[20px] font-bold mb-[10px]">
                  No Assessment
                </h4>
                <p className=" text-[15px] text-[#848484]">
                  No Assessment, book your session with just few clicks with
                  experts
                </p>
              </span>
            </div>
            <div
              class="flex flex-row mt-10"
              data-aos="zoom-in"
              data-aos-delay="150">
              <span className="my-auto">
                <Shield className=" text-[#17AD94] w-[48px] h-[48px]" />
              </span>
              <span className="ml-[20px]">
                <h4 className="text-[20px] font-bold mb-[10px]">
                  Safe & Secure
                </h4>
                <p className="text-[15px] text-[#848484]">
                  Online therapy with us is safe and secure with us, it is
                  totally confidential
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    //   <!-- End Features Section -->
  );
};

export default HomePart3;
