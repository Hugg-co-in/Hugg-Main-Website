import React from "react";
import ServicesCard from "./ServicesCard";
import {
  Smile,
  FileText,
  Users,
  UserRoundCheck,
  Building2,
  Sheet,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  return (
    <Card className="border-none md:mx-8 mx-2 py-10">
      <div className="ml-4">
        <div className="flex flex-row">
          <span>
            <h2 className="text-gray-400 uppercase font-bold">Services</h2>
          </span>
          <span className="ml-4 my-auto w-[30%]">
            <hr />
          </span>
        </div>
        <p className=" font-bold text-4xl max-[480px]:text-3xl uppercase">
          Check our Services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 items-center mx-auto">
        <ServicesCard
          Icon={Smile}
          url="inner-page.html"
          heading="Psycho-Therapy"
          para="PsychoTherapy by best therapists in the industry, with privacy and confidentiality"
        />{" "}
        <ServicesCard
          Icon={FileText}
          url="https://topmate.io/have_a_hugg/282956"
          heading="Digital Products"
          para="Digital Products like self-care checklist, 7 Days Self Love challenge for Moms and others, which will make you smile every day of your life :)"
        />{" "}
        <ServicesCard
          Icon={Users}
          url="https://topmate.io/have_a_hugg/271958"
          heading="Career Counseling"
          para="Know your interests and skillsets with help of Psychologist and talk to peer about your interested fields"
        />
        <ServicesCard
          Icon={UserRoundCheck}
          url="https://topmate.io/have_a_hugg/178051?coupon_code=STUDENTs"
          heading="Free Counseling Session for Students"
          para="We provide free counseling sessions to students as financial aid"
        />
        <ServicesCard
          Icon={Sheet}
          url="inner-page.html"
          heading="CBT Training"
          para="Cognitive behavioural therapy training for aspiring
                  psychologists to increase their skillsets and get more exposure with mock clients"
        />
        <ServicesCard
          Icon={Building2}
          url="#"
          heading="For Business"
          para=" We provide customized packages to Businesses for their employees"
        />{" "}
      </div>
    </Card>
  );
};

export default Services;
