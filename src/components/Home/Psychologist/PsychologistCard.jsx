import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

const PsychologistCard = ({ psychologist }) => {
  return (
    <Card className="w-full max-w-sm shrink-0">
      <div className="p-6 flex flex-col">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img
              alt="Doctor"
              className="rounded-full"
              height="96"
              src={psychologist.profilePhoto}
              style={{
                aspectRatio: "96/96",
                objectFit: "cover",
              }}
              width="96"
            />
          </div>
          <div className="grid gap-0.5">
            <h1 className="text-lg font-bold leading-none">
              {psychologist.name}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {psychologist.position}
            </p>
          </div>
        </div>
        <div className=" mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-wrap">
            {psychologist.qualification}
          </p>
          <div className="text-wrap py-3">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {psychologist.description}
            </p>
          </div>
        </div>
        <div className="place-self-end mr-4 mt-auto mb-4">
          <a href="https://topmate.io/have_a_hugg/286223">
            <Button className="bg-[#17AD94] hover:bg-[#17AD94] hover:opacity-75">
              Book a session
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default PsychologistCard;
