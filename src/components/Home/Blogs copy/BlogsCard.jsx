import React from "react";

const BlogsCard = ({ blogsData }) => {
  return (
    <div className="flex w-full h-full border rounded-md">
      <a href={blogsData.redirectUrl} target="_blank">
        <div className="flex flex-col">
          <img src={blogsData.imgSrc} className="" alt="..." />
          <div className="p-4">
            <h5 className="text-xl">{blogsData.title}</h5>
            <p className=" text-gray-500 py-4">by&nbsp;{blogsData.writtenBy}</p>
            <p className="">{blogsData.blogMessage}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogsCard;
