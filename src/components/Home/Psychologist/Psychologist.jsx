import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Star, BookCheck } from "lucide-react";
import Monosshita from "../../../assets/img/psychologists/mono.jpg";
import Shubholakshmi from "../../../assets/img/psychologists/shu.jpeg";
import Tadiparthi from "../../../assets/img/psychologists/ritika.jpeg";
import Bhavika from "../../../assets/img/psychologists/bha.jpeg";
import Disha from "../../../assets/img/psychologists/dis.jpeg";
import Sristi from "../../../assets/img/psychologists/sristi.jpg";
import Soma from "../../../assets/img/psychologists/soma.jpg";
import Anisha from "../../../assets/img/psychologists/anisha.jpg";
import Riyanka from "../../../assets/img/psychologists/riyanka.jpeg";
import AmnaAliProfile from "../../../assets/img/psychologists/Amna Ali-Semi-Professional photo (1).jpg";
import AqsaKhatibProfile from "../../../assets/img/psychologists/aqsa.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PsychologistCard from "./PsychologistCard";

export const works = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
];
const TopPsychologistData = [
  {
    name: "Monosshita Saha",
    profilePhoto: Monosshita,
    position: "Counselling Psychologist",
    qualification: "Master's in Counseling Psychology",
    description:
      "Expert in anxiety, depression, panic attacks, stress handling | 1 year experience as psychologist",
  },
  {
    name: "Shubholakshmi Sarcar",
    profilePhoto: Shubholakshmi,
    position: "Trainee",
    qualification:
      "Research-driven, organized, and dependable student successful at managing multiple priorities with a positive attitude and global outlook.",
    description: "Served more than 10 clients via hugg.co.in",
  },
];

const PsychologistData = [
  {
    name: "Tadiparthi Ritika",
    profilePhoto: Tadiparthi,
    position: "Trainee",
    qualification: "",
    description:
      "Tadiparthi Ritika is a counselor with expertise in Cognitive Behavioral Therapy(CBT). Mindfulness and coping-focused therapy.",
  },
  {
    name: "Bhavika Dugar",
    profilePhoto: Bhavika,
    position: "Trainee",
    qualification: "",
    description:
      "Bhavika Dugar is a counselor with expertise resolving anxiety,inner guilt and self doubt.",
  },
  {
    name: "Disha Jain",
    profilePhoto: Disha,
    position: "Trainee",
    qualification: "",
    description:
      "Disha is a counselor with expertise in Cognitive Behavioral Therapy(CBT). Mindfulness and coping-focused therapy.",
  },
  {
    name: "Sristi Ganguly",
    profilePhoto: Sristi,
    position: "Trainee",
    qualification: "",
    description:
      "Sristi Ganguly is a counselor with expertise in Cognitive Behavioral Therapy(CBT). Mindfulness and coping-focused therapy.",
  },
  {
    name: "Soma",
    profilePhoto: Soma,
    position: "Trainee",
    qualification: "",
    description:
      "As a counsellor specialising in Cognitive Behavioural Therapy (CBT), I use empowering strategies to help individuals. My work centers on fostering coping skills in addressing a range of issues, including anxiety, self-esteem, relationship concerns, and depression, through a client-centred approach.",
  },
  {
    name: "Anisha",
    profilePhoto: Anisha,
    position: "Clinical",
    qualification: "",
    description:
      "Anisha is a clinical psychologist with Msc in Clincial Psychology. She is expert in handling anxiety, self-esteem, relationship concerns, and depression, through a client-centred approach.As a counselor with expertise in Cognitive Behavioral Therapy(CBT). Mindfulness and coping-focused therapy.",
  },
  {
    name: "Riyanka D. Sharma",
    profilePhoto: Riyanka,
    position: "Counselling Psychologist",
    qualification: "",
    description:
      "Volunteered as a community manager of Psychology club - Psylience at our University.Currently working as a Consultant Mental health Counsellor at hugg.co.in.",
  },
  {
    name: "Amna Ali ",
    profilePhoto: AmnaAliProfile,
    position: "Counselling Psychologist",
    qualification: "",
    description:
      "Expert in anxiety, depression, panic attacks, stress handling | 1 year experience as psychologist",
  },
  {
    name: "Aqsa Khatib",
    profilePhoto: AqsaKhatibProfile,
    position: "Counselling Psychologist",
    qualification: "",
    description:
      "Masters in Counseling Psychology, I’ve been curious and learning in the field of psychology for the past eight years.",
  },
];
const Psychologist = () => {
  return (
    <div id="booking" className="container max-[767px]:p-2 pt-24">
      <h2 className="text-4xl font-[500] text-inherit py-8">
        Book therapy with your Psychologist
      </h2>
      <div className="flex flex-row py-5">
        <h2 className="text-3xl">Top Rated Psychologist</h2>
        <span>
          <Star className=" ml-1 w-9 h-9 text-yellow-500" />
        </span>
      </div>
      <div>
        <ScrollArea className="whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {TopPsychologistData.map((psychologist, index) => (
              <PsychologistCard
                psychologist={psychologist}
                key={index}
                // className="max-w-96"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <h3 className="text-2xl py-5">Our Cohort Psychologists</h3>
      <div className="flex flex-row py-2">
        <span>
          <BookCheck className="w-9 h-9 text-[#17AD94] mr-2" />
        </span>
        <p>
          The psychologists listed below are trusted by hugg.co.in and served
          more than 150 hours of counseling sessions.
        </p>
      </div>
      <div>
        <ScrollArea className="whitespace-nowrap rounded-md border">
          <div className="flex space-x-4 p-4">
            {PsychologistData.map((psychologist, index) => (
              <PsychologistCard
                psychologist={psychologist}
                key={index}
                // className="max-w-96"
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
};

export default Psychologist;
