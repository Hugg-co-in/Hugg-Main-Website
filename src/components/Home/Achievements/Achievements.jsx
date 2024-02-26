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
import bImg from "../../../assets/img/achievements/bootcamp.jpg";
import cnbcc from "../../../assets/img/achievements/cnbcc.jpeg";
import anveshan from "../../../assets/img/achievements/anveshan (1).jpeg";

const Achievements = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  const achievementsData = [
    // {
    //   imgSrc: bImg,
    // },
    {
      imgSrc: cnbcc,
    },
    {
      imgSrc: anveshan,
    },
  ];
  return (
    <Card class="border-none md:mx-8 mx-2 py-20">
      <div class="ml-4">
        <div className="flex flex-row">
          <span>
            <h2 className="text-gray-400 uppercase font-bold">Achievements</h2>
          </span>
          <span className="ml-4 my-auto w-[30%]">
            <hr />
          </span>
        </div>

        <p className="font-bold text-4xl max-[480px]:text-3xl uppercase">
          Check our Achievements
        </p>
      </div>
      <div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full md:px-32 sm:px-16 max-[480px]:px-2 pt-16"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}>
          <CarouselContent>
            {achievementsData.map((data, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <img src={data.imgSrc} className=" w-full" alt="" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
      <CarouselNext /> */}
        </Carousel>
      </div>
    </Card>
  );
};

export default Achievements;
