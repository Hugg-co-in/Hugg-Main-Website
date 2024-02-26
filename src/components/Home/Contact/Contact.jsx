import React from "react";
import { Mail, Instagram, InstagramIcon } from "lucide-react";
const Contact = () => {
  return (
    <div class="container py-10">
      <div class="mb-10">
        <div className="flex flex-row">
          <span>
            <h2 className="text-gray-400 uppercase font-bold">Contact</h2>
          </span>
          <span className="ml-4 my-auto w-[30%]">
            <hr />
          </span>
        </div>

        <p className="font-bold text-4xl max-[480px]:text-3xl uppercase">
          Contact Us
        </p>
      </div>

      <div className="flex flex-col ml-2">
        <div class="flex flex-row mb-8">
          <span class="bg-[#17AD94] rounded-sm flex items-center justify-center my-auto p-3">
            <Mail class="w-[24px] h-[24px]" />
          </span>
          <span className="ml-8">
            <h4 className=" text-xl font-[600] mb-2">Email:</h4>
            <p className="mb-0 text-md text-[#484848]">contact@hugg.co.in</p>
          </span>
        </div>

        <div class="flex flex-row">
          <span class="bg-[#17AD94] rounded-sm flex items-center justify-center my-auto p-3">
            <Instagram class="w-[24px] h-[24px]" />
          </span>
          <span className="ml-8">
            <h4 className="text-xl font-[600] mb-2">WhatsApp:</h4>
            <p className="mb-0 text-md text-[#484848]">7819886454</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
