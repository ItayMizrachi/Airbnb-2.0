import Image from "next/image";
import React from "react";

const LargeCard = ({ img, title, description, buttonText }) => {
  return (
    <section className="relative py-16 ">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl  transition transform duration-100 ease-out" />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-2 btn hover:bg-gray-800">{buttonText}</button>
      </div>
    </section>
  );
};

export default LargeCard;

//hover:shadow-2xl