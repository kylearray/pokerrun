import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CeraCompact, CeraPro, Post } from "@/components/fonts";

export default function page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white">
      {/* Hero Section */}
      <div className="w-screen flex justify-center items-center bg-white min-h-96 h-auto">
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center pt-6">
            <h2
              className={`${Post.className} font-bold text-array-black underline text-5xl lg:text-6xl`}
            >
              8512 1ST AVE NE
            </h2>
          </div>

          {/* Image */}
          <div className="col-span-12 flex flex-col justify-center pt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  width={500}
                  height={200}
                  src="/static/images/placeholder.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  width={500}
                  height={200}
                  src="/static/images/placeholder.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  width={500}
                  height={200}
                  src="/static/images/placeholder.jpg"
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  width={500}
                  height={200}
                  src="/static/images/placeholder.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
