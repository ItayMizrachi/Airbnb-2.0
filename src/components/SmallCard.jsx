import Image from "next/image";
import React from "react";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:shadow-lg hover:bg-base-200 
     md:hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16 ">
        <Image alt="place" className="rounded-lg" src={img} layout="fill" />
      </div>
      {/* left */}
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-400">{distance}</h3>
      </div>
      {/* Right */}
    </div>
  );
};

export default SmallCard;
