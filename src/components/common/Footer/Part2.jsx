import React from "react";
import { Link } from "react-router-dom";

const Part2 = () => {
  return (
    <div className="bg-black  py-10">
      <span className=" flex flex-row text-center items-center justify-center text-white">
        <p>© Copyright&nbsp;</p>
        <Link to="/" className=" font-semibold">
          hugg.co.in&nbsp;
        </Link>
        <p>All Rights Reserved</p>
      </span>
      <h3 className="text-center items-center justify-center text-2xl text-white">
        Designed with ♥
      </h3>
    </div>
  );
};

export default Part2;
