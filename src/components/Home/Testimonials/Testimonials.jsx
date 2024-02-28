import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonialsData = [
  {
    heading1: "Our client",
    heading2: "Therapy",
    content:
      "Therapy Session with Ankita was the best time, I was able to clear my self doubt and I felt really calm after the session",
  },
  {
    heading1: "Our client",
    heading2: "Therapy",
    content:
      "This session made me realise about my inner self and thaughts. I am much more aware about myself after this session and I feel really calm now.",
  },
  {
    heading1: "Our client",
    heading2: "Initiative for Students",
    content:
      "I was really happy and felt heard as a student tho I don't have finances for it. I'm really glad that hugg.co.in came up with this idea for students. I'm sure that it'll help more students efficiently.",
  },
];

import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  React.useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div className="bg-testimonialBgImg bg-red-500 py-20 my-10">
      <Carousel
        plugins={[plugin.current]}
        className=" w-full md:px-48 sm:px-16 max-[480px]:px-2"
        data-aos="zoom-in"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.play}>
        <CarouselContent data-aos="fade-up" data-aos-delay="100">
          {testimonialsData.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <h3 className="text-white text-center font-[700] text-lg">
                  {data.heading1}
                </h3>
                <h4 className="text-[#ddd] text-center text-xs">
                  {data.heading2}
                </h4>
                <div className="flex text-[#eee] flex-row text-center italic mt-4">
                  <span className="flex">
                    <Quote className="w-5" />
                  </span>
                  <span className="flex space-y-5">
                    &nbsp;&nbsp;{data.content} &nbsp;&nbsp;
                  </span>
                  <span className="flex">
                    <Quote className=" w-5" />
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
    </div>
  );
};

export default Testimonials;
