import React from "react";
import "./style.css";
import brangImg1 from "../../../assets/img/hugg-brands/ecell.jpeg";
import brangImg2 from "../../../assets/img/hugg-brands/images.png";
import brangImg3 from "../../../assets/img/hugg-brands/impunjab.png";
import brangImg4 from "../../../assets/img/hugg-brands/edc.jpeg";
import brangImg5 from "../../../assets/img/hugg-brands/brandmonkey.jpeg";
import brangImg6 from "../../../assets/img/hugg-brands/unyc.jpeg";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const brandImg = [
  {
    name: "",
    src: brangImg1,
  },
  {
    name: "",
    src: brangImg2,
  },
  {
    name: "",
    src: brangImg3,
  },
  {
    name: "",
    src: brangImg4,
  },
  {
    name: "",
    src: brangImg5,
  },
  {
    name: "",
    src: brangImg6,
  },
];
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
const Client = () => {
  return (
    <section id="clients" className="clients">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max sm:space-x-8 md:space-x-24 p-8">
          {brandImg.map((brand, index) => (
            <figure key={index} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <img
                  src={brand.src}
                  alt={`Photo by ${brand.name}`}
                  className="h-fit w-fit object-cover relative max-h-36 p-5"
                  width={200}
                  height={200}
                />
              </div>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default Client;
