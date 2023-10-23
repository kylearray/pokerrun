"use client";
import React, { useState } from "react";
import Image from "next/image";
import listings from "@/components/listings.js";
import { CeraPro, CeraCompact } from "@/components/fonts";
import Link from "next/link";

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
        className={`w-screen flex justify-center items-center ${backgroundColorClass} min-h-fit pb-4`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 p-4 gap-2 mb-10  w-full max-w-[72rem] place-items-center">
          {/* Left side */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-center lg:py-8 lg:pl-10">
            <div className="flex flex-col justify-center items-center w-full h-fit py-4 ">
              <br className="h-96"></br>
              <Image
                className=" rounded-lg object-cover order-last mr-12"
                src={
                  item.Header ? item.Header : "/static/images/placeholder.jpg"
                }
                width={400}
                height={267}
                alt="Image of house"
              />
            </div>

            <p
              className={`${CeraPro.className} font-light text-white pb-5 lg:mt-2 text-3xl text-center`}
            >
              {item.Price}
            </p>
          </div>

          {/* Right Side */}
          <div className="col-span-1 max-w-xl lg:col-span-7 lg:ml-10 lg:pl-3 flex lg:py-8 w-full">
            <div className="flex flex-col items-start">
              <h2
                className={`${CeraPro.className} font-bold text-white text-4xl`}
              >
                {item.Address}
              </h2>
              <h3
                className={`${CeraPro.className} font-light text-white text-2xl`}
              >
                {item.Subaddress}
              </h3>
              <p
                className={`${CeraCompact.className} font-light text-white text-base lg:pr-5 pt-4 leading-5`}
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
                    className={`${CeraPro.className} font-light text-white text-2xl lg:text-3xl pl-2 `}
                  >
                    {item.Beds}
                  </p>
                </div>

                {/* Bathrooms */}
                <div className="flex justify-center pl-7 items-center">
                  <Image
                    width={40}
                    height={40}
                    alt="Bath png"
                    src="/static/images/Icons/bath.png"
                  />
                  <p
                    className={`${CeraPro.className} font-light text-white text-2xl lg:text-3xl pl-2 `}
                  >
                    {item.Baths}
                  </p>
                </div>

                {/* Square Footage */}
                <div className="flex justify-center pl-6 items-center">
                  <Image
                    width={40}
                    height={40}
                    alt="House png"
                    src="/static/images/Icons/house.png"
                  />
                  <p
                    className={`${CeraPro.className} font-light text-white text-2xl lg:text-3xl pl-2 `}
                  >
                    {item.SqFt}
                  </p>
                </div>
              </div>

              {item.Media ? (
                <Link href={item.Media}>
                  {" "}
                  <button className="h-8 px-5 mt-8 text-array-black transition-colors duration-200 bg-white rounded-sm focus:shadow-outline hover:bg-gray-200 ">
                    View More
                  </button>
                </Link>
              ) : (
                <></>
              )}

              {item.Photos.length > 1 ? (
                <Link href="/8512">
                  {" "}
                  <button className="h-8 px-5 mt-8 text-array-black transition-colors duration-200 bg-white rounded-sm focus:shadow-outline hover:bg-gray-200 ">
                    View More
                  </button>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
}

export default PropertiesContainer;
