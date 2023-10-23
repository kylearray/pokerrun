import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CeraCompact, CeraPro, Post } from "@/components/fonts";
import listings from "@/components/listings.js";

export default function page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white">
      {/* Hero Section */}
      <div className="w-screen flex justify-center items-center bg-white min-h-96 h-auto">
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center pt-6">
            <h2
              className={`${CeraPro.className} font-medium text-array-black underline text-4xl lg:text-5xl`}
            >
              8512 1ST AVE NE
            </h2>
          </div>

          {/* Image */}
          <div className="col-span-12 flex flex-col justify-center pt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/A.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/AA.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/B.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/L.jpg"
                    alt=""
                    width={270 }
                    height={160}
                  />
                </div>
              </div>

              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/C.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/D.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/K.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/E.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
              </div>

              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/F.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/G.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/H.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/N.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
              </div>

              <div className="grid gap-4">
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/I.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/J.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>

                
                <div>
                  <Image
                    className="h-auto max-w-full rounded-lg"
                    src="/static/images/PropertyPhotos/8512/M.jpg"
                    alt=""
                    width={320}
                    height={270}
                  />
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
