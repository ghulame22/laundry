import Image from "next/image";
import React from "react";
import one from "@/assets/one.png";

const Hero = () => {
  return (
    <div className="flex bg-blue-400 p-28 justify-between">
      <div className="text-white">
        <h2 className="text-7xl font-bold mb-4 leading-tight">
          Provides
          <br />
          High Quality
          <br />
          Laundry Services
        </h2>
        <p className="text-lg mb-8 w-2/3">
          Will be the leading provider cleaning service by creating impact on
          all the quality
        </p>
        <button className="bg-amber-400 py-4 px-12 rounded-lg text-white text-lg font-semibold">
          Get started
        </button>
      </div>
      <div className="text-center">
        <Image src={one} width={502} height={527} alt="Laundry Image" />
      </div>
    </div>
  );
};

export default Hero;
