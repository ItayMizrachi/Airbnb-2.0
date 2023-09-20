import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[750px] ">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/2 w-full text-center  ">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-teal-500 btn bg-white hover:bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
