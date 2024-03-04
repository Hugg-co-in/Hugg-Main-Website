import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

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

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="bg-testimonialBgImg bg-red-500 py-20 my-10">
      <div className="w-full lg:max-w-5xl mx-auto">
        <Carousel
          plugins={[plugin.current]}
          // onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
          className="relative max-[480px]:px-2"
          // onChange={() => console.log("Hi")}
          onMouseEnter={console.log(plugin)}>
          <CarouselContent
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              // transition: "transform 0.5s ease-in-out",
            }}
            onChange={() => console.log("Hi")}>
            {testimonialsData.map((data, index) => (
              <CarouselItem key={index} onChange={() => console.log("Hi")}>
                <div className="p-1">
                  <h3 className="text-white text-center font-[700] text-lg">
                    {data.heading1}
                  </h3>
                  <h4 className="text-[#ddd] text-center text-xs">
                    {data.heading2}
                  </h4>
                  <div className="flex text-[#eee] flex-row text-center italic mt-4 px-4">
                    <p className="space-y-5">"{data.content}"</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious onClick={prevSlide} />
        <CarouselNext onClick={nextSlide} /> */}
        </Carousel>
        <div className="flex justify-center mt-4">
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-4 h-4 mx-2 cursor-pointer rounded-full ${
                index === activeIndex ? "bg-[#17AD94]" : "bg-gray-400"
              }`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
