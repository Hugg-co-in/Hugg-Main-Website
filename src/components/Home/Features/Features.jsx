import React from "react";
import img1 from "../../../assets/img/A VIRTUAL-HUG.png";
import { SquareUser, Wifi, ReceiptText, Shield } from "lucide-react";

const Features = () => {
  return (
    <section class="">
      <div className="container max-[767px]:p-0">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <div class="" data-aos="fade-right">
            <img src={img1} className="min-h-[400px] w-full" />
          </div>
          <div className="max-[767px]:px-6">
            <div class="flex flex-row">
              <span className="my-auto">
                <SquareUser className="text-[#17AD94] w-12 h-12" />
              </span>
              {/* <i class="bi-person-badge"></i> */}
              <span className="ml-5">
                <h4 className="text-xl font-bold mb-3">One-on-One therapy</h4>
                <p className="text-base text-[#848484]">
                  Only psychologist and you, so you can say your heart out
                </p>
              </span>
            </div>
            <div class="flex flex-row mt-10">
              <span className="my-auto">
                <Wifi className="text-[#17AD94] w-12 h-12" />
              </span>
              <span className="ml-5">
                <h4 className="text-xl font-bold mb-3">Totally Online</h4>
                <p className="text-base text-[#848484]">
                  You can take theapy whenever you want, all online
                </p>
              </span>
            </div>
            <div class="flex flex-row mt-10">
              <span className="my-auto">
                <ReceiptText className=" text-[#17AD94] w-12 h-12" />
              </span>
              <span className="ml-5">
                <h4 className="text-xl font-bold mb-3">No Assessment</h4>
                <p className="text-base text-[#848484]">
                  No Assessment, book your session with just few clicks with
                  experts
                </p>
              </span>
            </div>
            <div class="flex flex-row mt-10">
              <span className="my-auto">
                <Shield className=" text-[#17AD94] w-12 h-12" />
              </span>
              <span className="ml-5">
                <h4 className="text-xl font-bold mb-3">Safe & Secure</h4>
                <p className="text-base text-[#848484]">
                  Online therapy with us is safe and secure with us, it is
                  totally confidential
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
