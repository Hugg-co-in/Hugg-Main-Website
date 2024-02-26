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
import bImg from "../../assets/img/achievements/bootcamp.jpg";
import cnbcc from "../../assets/img/achievements/cnbcc.jpeg";
import anveshan from "../../assets/img/achievements/anveshan (1).jpeg";

const achievementsData = [
  //   {
  //     imgSrc: bImg,
  //   },
  {
    imgSrc: cnbcc,
  },
  {
    imgSrc: anveshan,
  },
  {
    imgSrc: cnbcc,
  },
  {
    imgSrc: anveshan,
  },
];
const AutoPlaySlider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="bg-testimonialBgImg w-full md:px-32 sm:px-16 max-[480px]:px-2"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}>
      <CarouselContent>
        {achievementsData.map((data, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img src={data.imgSrc} className=" w-[50%]" alt="" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default AutoPlaySlider;
