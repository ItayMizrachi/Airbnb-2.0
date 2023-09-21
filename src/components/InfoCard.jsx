import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <>
      {img !== "https://links.papareact.com/hz2" && (
        <div className="flex flex-col lg:flex-row my-4 md:px-2 md:pr-4 border-b cursor-pointer hover:opacity-90 hover:shadow-xl transition duration-200 ease-out first:border-t rounded-2xl ">
          <div className="relative w-full h-52 lg:h-52 lg:w-80 flex-shrink-0">
            <Image alt="place" src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
          </div>

          <div className="flex flex-col flex-grow pl-5 mt-5 md:mt-0 py-7 px-2 pr-4 ">
            <div className="flex justify-between">
              <p>{location}</p>
              <HeartIcon className="h-7 cursor-pointer" />
            </div>

            <h4 className="text-xl">{title}</h4>

            <div className="border-b w-10 pt-2"></div>
            <p className="pt-2 text-sm text-gray-500 flex-grow">
              {description}
            </p>

            <div className="flex justify-between items-end pt-5">
              <p className="flex items-center">
                <StarIcon className="h-5 text-red-400" />
                {star}
              </p>

              <div className="">
                <p className="text-lg lg:text-2xl font-semibold pb-2 ">
                  {price}
                </p>
                <p className="text-right font-extralight">{total}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfoCard;
