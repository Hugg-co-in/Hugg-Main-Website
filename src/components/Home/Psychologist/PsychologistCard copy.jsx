import { Button } from "@/components/ui/button";
import React from "react";

const PsychologistCard = ({ data }) => {
  return (
    <div className="flex flex-row border min-w-96 w-full h-full">
      <div className="max-w-48">
        <img
          src={data.profilePhoto}
          className="object-cover min-w-36 min-h-36"
          alt="..."
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="px-3">
          <h4 className=" text-xl mt-10px font-[500] text-inherit">
            {data.name} | {data.position}
          </h4>
          <p className="">{data.qualification}</p>
          <p className="card-text">{data.description}</p>
        </div>
        <div className="place-self-end mr-4 mt-auto mb-4">
          <a href="https://topmate.io/have_a_hugg/286223">
            <Button className="bg-[#17AD94] hover:bg-[#17AD94] hover:opacity-75">
              Book a session
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PsychologistCard;
