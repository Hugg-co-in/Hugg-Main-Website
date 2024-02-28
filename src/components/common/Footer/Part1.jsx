import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import LinkTitle from "./LinkTitle";

const Part1 = () => {
  return (
    <footer className="bg-[#151515]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 mr-5">
            <div className="flex flex-row md:flex-col">
              <div className="mr-3 md:mr-0">
                <Link to="/">
                  <h3 className=" text-white uppercase text-2xl font-[700]">
                    hugg.co.in
                  </h3>
                </Link>
              </div>
              <div className="flex flex-row space-x-4 md:pt-7">
                <span className="bg-[#292929] rounded-sm flex items-center justify-center my-auto p-3">
                  <Link>
                    <Linkedin className="w-[24px] h-[24px] text-white" />
                  </Link>
                </span>
                <span className="bg-[#292929] rounded-sm flex items-center justify-center my-auto p-3">
                  <Link>
                    <Instagram className="w-[24px] h-[24px] text-white" />
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-5 text-base font-semibold text-white">
                Useful Links
              </h2>
              <ul className="text-white space-y-3">
                <li className="">
                  <Link to="#" className="hover:underline ">
                    <LinkTitle title="Home" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="About Us" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Services" />
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-base font-semibold text-white">Legal</h2>
              <ul className="text-white space-y-3">
                <li className="">
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Terms of service" />
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    <LinkTitle title="Privacy policy" />
                  </Link>
                </li>
              </ul>
            </div>
            {/* ------Newsletter-------------- */}
            <div className="col-lg-4 col-md-6 footer-newsletter text-white">
              <h2 className="mb-3 text-base font-semibold text-white">
                Our&nbsp;Newsletter
              </h2>

              <p className="mb-2">
                Join&nbsp;our&nbsp;'Virtual-hug'&nbsp;newsletter&nbsp;today&nbsp;!
              </p>
              <span>
                <a
                 
                  href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7038382516180762624"
                  target="_blank">
                  <Button className="bg-[#0a66c2] rounded-full py-2 px-4 ">
                    Subscribe&nbsp;on&nbsp;LinkedIn
                  </Button>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Part1;
