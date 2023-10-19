import Image from "next/image";
import { CeraCompact, CeraPro, Post } from "@/components/fonts";
import PropertiesContainer from "@/components/PropertiesContainer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-2 bg-white">
      {/* Hero Section */}
      <div className="w-screen flex justify-center items-center min-h-96">
        {/* Container, Only col-spans in here */}
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem]">
          {/* Left Card Hero Image */}
          <div className="col-span-4">
            <Image
              alt="stack of cards"
              src="/static/images/StackOfCards.png"
              width={300}
              height={600}
            />
          </div>

          {/* Right side */}
          <div className="col-span-6 h-full">
            <div className="flex flex-col justify-center h-full">
              <p className={`${CeraPro.className} font-light text-array-black`}>
                <strong className="font-medium">Array Real Estate </strong>
                Presents
              </p>
              <Image
                src="/static/images/POKERRUN.png"
                alt="title"
                width={400}
                height={100}
              />
              <p
                className={`${CeraCompact.className} font-bold text-2xl h-6 text-array-black`}
              >
                October 28th, 2023
              </p>
              <p
                className={`${CeraCompact.className} font-bold text-lg pb-2 text-array-black`}
              >
                12:00PM - 3:00PM PST
              </p>
              <p
                className={`${CeraCompact.className} font-light leading-5 text-2xl text-array-black`}
              >
                Join us for a free house-hopping adventure! Collect cards, form
                your best poker hand, and stand a chance to win fabulous prizes.
                Don't miss the excitement – see you at the open houses!
              </p>
              <div className="flex">
                <div className="mt-4 h-7 w-32 bg-array-red hover:bg-red-300 duration-300 flex">
                  <Link
                    href="#listing"
                    className={`${CeraCompact.className} font-thin text-base uppercase text-center justify-center w-full pt-[.2rem]`}
                  >
                    VIEW HOUSES
                  </Link>
                </div>

                <div className="mt-4 ml-4 h-7 w-32 bg-array-red hover:bg-red-300 duration-300 flex">
                  <Link
                    href="#prizes"
                    className={`${CeraCompact.className} font-thin text-base uppercase text-center justify-center w-full pt-[.2rem]`}
                  >
                    SEE PRIZES
                  </Link>
                </div>
              </div>

              <div className="Spacer h-24" />
            </div>
          </div>
        </div>
      </div>

      {/* How To Play Section */}
      <div id="how-to-play" className="w-screen flex justify-center items-center bg-array-red min-h-96">
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center pt-6">
            <h2 className={`${Post.className} font-bold text-white text-7xl`}>
              HOW TO PLAY
            </h2>
          </div>

          {/* Image */}
          <div className="col-span-12 flex justify-center">
            <Image
              width={500}
              height={207}
              alt="Spread of cards"
              src="/static/images/SpreadOfCards_PNG.png"
            />
          </div>

          {/* Main Text */}
          <div className="col-span-6 col-start-4 flex justify-center pt-8 pb-11">
            <p
              className={`${CeraCompact.className} font-light text-white text-lg leading-6 text-center tracking-tight`}
            >
              Join our Poker Run event on October 28th from 12:00pm to
              3:00pm—it's easy and free! Just visit the open houses listed
              below, collect a playing card at each house, and aim to make the
              best five-card poker hand possible. The more houses you visit, the
              more cards you collect, increasing your chances of winning. After
              3:00pm, submit your best hand, and if your hand ranks among the
              top three, you’ll win a prize! It's a fun-filled day of exploring
              homes and playing poker. See you there!
            </p>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div id="prizes" className="w-screen flex justify-center items-center bg-array-black min-h-96">
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] pb-24 ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center pt-6">
            <h2 className={`${Post.className} font-bold text-white text-7xl`}>
              PRIZES
            </h2>
          </div>

          {/* Prizes Container */}
          <div className="col-span-12 grid-cols-3 grid flex justify-center pt-10">
            {/* Second Place */}
            <div className="col-span-1 mx-6 lg:mt-16">
              <div className="w-full bg-[#ECF0FA] h-44 px-5 py-4 flex justify-center align-center">
                <Image
                  className=""
                  src="/static/images/2ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white h-44 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#B3B8C5] text-center`}
                >
                  Second Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-3 text-array-black text-center`}
                >
                  Seattle Kraken vs. New York Islanders Tickets (Lower section
                  seats on 11/16 @ 7:00pm - $300+ value)
                </p>
              </div>
            </div>

            {/* First Place */}
            <div className="col-span-1 mx-6 order-first lg:order-none">
              <div className="w-full bg-[#FFE483] h-44 px-5 py-4 flex justify-center align-center">
                <Image
                  className=""
                  src="/static/images/1ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white h-44 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#FFC700] text-center`}
                >
                  First Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-5 text-array-black text-center`}
                >
                  “Taste of Seattle” Basket Gift cards for top-rated Seattle
                  eateries - $600+ value
                </p>
              </div>
            </div>

            {/* Third Place */}
            <div className="col-span-1 mx-6 lg:mt-16">
              <div className="w-full bg-[#FF9C72] h-44 px-5 py-4 flex justify-center align-center">
                <Image
                  className=""
                  src="/static/images/3ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white h-44 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#EB8C64] text-center`}
                >
                  Third Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-3 text-array-black text-center`}
                >
                  2015 Sheridan Vineyard Block One Cabernet Sauvignon (Must be 21+ older to win -
                  $150+ value)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Listing Header*/}
      <div id="listing" className="w-screen flex justify-center items-center bg-white min-h-96">
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center py-8">
            <h2
              className={`${Post.className} font-bold text-array-black text-7xl`}
            >
              LISTINGS
            </h2>
          </div>
        </div>
      </div>

      {/* Listing */}
      <PropertiesContainer />

      {/* How To Play Section */}
      <div
        className={`w-screen flex justify-center items-center min-h-fit pt-10 bg-gray-200`}
      >
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 mb-10 max-h-96 w-full max-w-[72rem] ">
          {/* Left side */}
          <div className="col-span-8 flex justify-center py-8  ">
            <div className="flex flex-col justify-center items-start w-full">
              <h2
                className={`${CeraPro.className} font-bold text-7xl text-array-black mb-5`}
              >
                Questions?
              </h2>
              <p
                className={`${CeraCompact.className} font-light text-lg text-array-black pr-5 pt-4 leading-5 mr-24`}
              >
                Feel free to ask us anything about the properties, the event, or
                the home-buying process. We're here to assist you every step of
                the way. Contact our dedicated agent, Michael, for personalized
                guidance and expert advice.
              </p>
            </div>
          </div>

          <div className="col-span-4 ml-10 pl-3 flex py-8 ">
            <div className="flex flex-col items-center w-full">
              <Image
                src="/static/images/Michael_Cropped.jpg"
                alt="Headshot of Michael Espada"
                width={200}
                height={200}
                className="justify-center align-center items-center"
              ></Image>
              <h2
                className={`${CeraPro.className} mt-3 font-medium text-xl text-array-black`}
              >
                Michael Espada
              </h2>
              <p
                className={`${CeraPro.className} font-light text-lg text-array-black`}
              >
                (425) 588-8893
              </p>
              <p
                className={`${CeraPro.className} font-light text-lg text-array-black`}
              >
                <Link className="underline" href="mailto:michael@arrayrealestate.com">michael@arrayrealestate.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* How To Play Section */}
      <div id="how-to-play" className="w-screen flex justify-center items-center bg-array-red min-h-96">
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-6 col-start-4 flex justify-center pt-8 pb-11">
            <p
              className={`${CeraCompact.className} font-light text-white text-sm leading-6 text-center tracking-tight`}
            >
              Rules of Poker Run
            </p>
          </div>
        </div>
      </div>

    </main>
  );
}
