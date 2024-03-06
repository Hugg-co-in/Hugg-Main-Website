import React from "react";
import BlogsCard from "./BlogsCard";
import mentalheal1 from "../../../assets/img/addons/blog1.jpg";
import mentalheal2 from "../../../assets/img/addons/blog2.jpg";
import mentalheal3 from "../../../assets/img/addons/blog3.jpg";
import mentalheal4 from "../../../assets/img/addons/blog5.jpg";

const Blogs = () => {
  const blogsData = [
    {
      redirectUrl:
        "https://www.linkedin.com/pulse/nithin-kamaths-story-why-taking-care-your-feelings-matters-6myoc/",
      imgSrc: `${mentalheal2}`,
    },
    {
      redirectUrl:
        "https://www.linkedin.com/pulse/stress-management-techniques-haveahugg-fli0c/",
      imgSrc: `${mentalheal1}`,
    },
    {
      redirectUrl:
        "https://www.linkedin.com/pulse/does-mental-health-count-disability-haveahugg-kmddc/",
      imgSrc: `${mentalheal3}`,
    },
    {
      redirectUrl:
        "https://www.linkedin.com/pulse/affordable-therapy-india-haveahugg-xavcc/?trackingId=N8MJXqKcSaefgg8gTOypFA%3D%3D",
      imgSrc: `${mentalheal4}`,
    },
  ];
  return (
    <div className="container">
      <div className="section-title">
        <div className="flex flex-row">
          <span>
            <h2 className="text-gray-400 uppercase font-bold">Blogs</h2>
          </span>
          <span className="ml-4 my-auto w-[30%]">
            <hr />
          </span>
        </div>
        <p className="font-bold text-4xl max-[480px]:text-3xl uppercase">
          Check our Blogs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 items-center mx-auto">
        {blogsData.map((blog, index) => (
          <BlogsCard key={index} blogsData={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
