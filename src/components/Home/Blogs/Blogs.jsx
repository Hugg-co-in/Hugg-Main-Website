import React from "react";
import BlogsCard from "./BlogsCard";
import mentalheal1 from "../../../assets/img/addons/mentalheal1.jpg";
import mentalheal2 from "../../../assets/img/addons/mentalheal2.jpg";
import mentalheal3 from "../../../assets/img/addons/anx.jpg";
import mentalheal4 from "../../../assets/img/addons/mentalheal4.jpg";

const Blogs = () => {
  const blogsData = [
    {
      redirectUrl: "http://blog.hugg.co.in/blog/64d19a000ee5100e21f362c7",
      imgSrc: `${mentalheal2}`,
      title: "What is Mental Health?",
      writtenBy: "Amna Ali",
      blogMessage:
        "Mental health is a condition of mental wellness that enables people to manage life's stressors, develop their potential, study and work effectively, and give back to their communities...",
    },
    {
      redirectUrl: "http://blog.hugg.co.in/blog/64c7d0ed6ad39b219227dff3",
      imgSrc: `${mentalheal4}`,
      title: 'A Pain Named "Normalcy"',
      writtenBy: "Riyanka",
      blogMessage:
        "  I am like a puzzle piece waiting to be placed. I’m sure most of us have heard of PTSD, but what about C-PTSD? It’s in the name, it is so darn...",
    },
    {
      redirectUrl: "http://blog.hugg.co.in/blog/64c217db6a99aeedce527cfc",
      imgSrc: `${mentalheal3}`,
      title: "The role of social media in mental health",
      writtenBy: "Aqsa",
      blogMessage:
        " Social media has grown to be a crucial component of today's world where individuals can communicate with one another, share ideas and thoughts, and express themselves verbally...",
    },
    {
      redirectUrl: "http://blog.hugg.co.in/blog/64ca0dc963b0180d65d57867",
      imgSrc: `${mentalheal1}`,
      title: "The stigma surrounding mental illness",
      writtenBy: "Prachee",
      blogMessage:
        "Mental illnesses bring dual hardships for those who suffer from them. They have to cope with the symptoms of the illness as well as the negative attitudes....",
    },
  ];
  return (
    <div class="container">
      <div class="section-title">
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

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 items-center mx-auto">
        {blogsData.map((blog, index) => (
          <BlogsCard key={index} blogsData={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
