import React from "react";

const BlogsCard = ({ blogsData }) => {
  return (
    <div class="flex w-full h-full border rounded-md">
      <a href={blogsData.redirectUrl} target="_blank">
        <div class="flex flex-col">
          <img src={blogsData.imgSrc} class="" alt="..." />
          <div class="p-4">
            <h5 class="text-xl">{blogsData.title}</h5>
            <p class=" text-gray-500 py-4">by&nbsp;{blogsData.writtenBy}</p>
            <p class="">{blogsData.blogMessage}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BlogsCard;
