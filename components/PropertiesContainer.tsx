"use client";
import React, { useState } from "react";
import Image from "next/image";
import listings from "@/components/listings.js";
import { CeraPro, CeraCompact } from "@/components/fonts";

function PropertiesContainer() {
  const [properties, setProperties] = useState(listings);
  let isBlackBackground = true;

  return properties.map((item) => {
    const backgroundColorClass = isBlackBackground
      ? "bg-array-black"
      : "bg-array-red";
    isBlackBackground = !isBlackBackground;

    return (
      <div
        key={item.Address}
        className={`w-screen flex justify-center items-center ${backgroundColorClass} min-h-fit pb-10`}
      >
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 mb-10 max-h-96 w-full max-w-[72rem] ">
          {/* Left side */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center py-8 pl-10">
            <div className="flex flex-col justify-center items-center w-full h-80 ">
              <br className="h-96"></br>
              <div className="relative w-full h-full">
                {/* <button className="absolute bottom-0 center-0 h-10 px-5 m-2 text-array-black transition-colors duration-200 bg-white rounded-sm focus:shadow-outline hover:bg-gray-200 z-30">
                  View More
                </button> */}
                <Image
                  className="absolute rounded-lg top-0 left-0 z-10 max-w-[400px] max-h-[267px] object-cover z-20"
                  src={item.Photos[0]}
                  width={400}
                  height={267}
                  alt="Image of house"
                />
                <Image
                  className="absolute top-0 left-0 rotate-[-11deg] transform translate-x-[-2rem] translate-y-[-2rem] z-10"
                  src="/static/images/Icons/Cloves.png"
                  width={170}
                  height={267}
                  alt="Ace of Spades"
                />
              </div>
            </div>
            <p
              className={`${CeraPro.className} font-light pb-5 mt-2 text-3xl text-center`}
            >
              {item.Price}
            </p>
          </div>

          {/* Right Side */}
          <div className="col-span-12 lg:col-span-7 ml-10 pl-3 flex py-8 ">
            <div className="flex flex-col items-start">
              <h2 className={`${CeraPro.className} font-bold text-4xl`}>
                {item.Address}
              </h2>
              <h3 className={`${CeraPro.className} font-light text-2xl`}>
                {item.Subaddress}
              </h3>
              <p
                className={`${CeraCompact.className} font-light text-base pr-5 pt-4 leading-5`}
              >
                {item.MarketingRemarks}
              </p>

              {/* Icon container */}
              <div className="flex w-full pt-4">
                {/* Bedrooms */}
                <div className="flex justify-center items-center">
                  <Image
                    width={40}
                    height={40}
                    alt="Bed png"
                    src="/static/images/Icons/bed.png"
                  />
                  <p
                    className={`${CeraPro.className} font-light text-3xl pl-2 `}
                  >
                    {item.Beds}
                  </p>
                </div>

                {/* Bathrooms */}
                <div className="flex justify-center pl-12 items-center">
                  <Image
                    width={40}
                    height={40}
                    alt="Bath png"
                    src="/static/images/Icons/bath.png"
                  />
                  <p
                    className={`${CeraPro.className} font-light text-3xl pl-2 `}
                  >
                    {item.Baths}
                  </p>
                </div>

                {/* Square Footage */}
                <div className="flex justify-center pl-12 items-center">
                  <Image
                    width={40}
                    height={40}
                    alt="House png"
                    src="/static/images/Icons/house.png"
                  />
                  <p
                    className={`${CeraPro.className} font-light text-3xl pl-2 `}
                  >
                    {item.SqFt}
                  </p>
                </div>
              </div>

              <button className="h-8 px-5 mt-8 text-array-black transition-colors duration-200 bg-white rounded-sm focus:shadow-outline hover:bg-gray-200 z-30">
                View More
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default PropertiesContainer;
