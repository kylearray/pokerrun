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
          <div className="col-span-3 justify-center lg:col-span-4 flex">
            <Image
              className="justify-center  w-36 md:w-[300px]"
              alt="stack of cards"
              src="/static/images/StackOfCards.png"
              width={300}
              height={600}
            />
          </div>

          {/* Right side */}
          <div className="col-span-3 mt-8 md:mt-auto md:col-span-8 md:pl-8 h-full">
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
                October 19th, 2024
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
                Don&#39;t miss the excitement – see you at the open houses!
              </p>
              <div className="flex">
                <div className="mt-4 h-7 w-32 bg-array-red hover:bg-red-300 duration-300 flex">
                  <Link
                    href="#listing"
                    className={`${CeraCompact.className} font-thin text-white text-base uppercase text-center justify-center w-full pt-[.2rem]`}
                  >
                    VIEW HOUSES
                  </Link>
                </div>

                <div className="mt-4 ml-4 h-7 w-32 bg-array-red hover:bg-red-300 duration-300 flex">
                  <Link
                    href="#prizes"
                    className={`${CeraCompact.className} font-thin text-white text-base uppercase text-center justify-center w-full pt-[.2rem]`}
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
      <div
        id="how-to-play"
        className="w-screen flex justify-center items-center bg-array-red min-h-96 pt-6"
      >
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center pt-6">
            <h2
              className={`${Post.className} font-bold text-white text-6xl lg:text-7xl`}
            >
              HOW TO PLAY
            </h2>
          </div>

          {/* Image */}
          <div className="col-span-12 flex justify-center">
            <Image
              className="w-64 pt-4 lg:w-auto"
              width={500}
              height={207}
              alt="Spread of cards"
              src="/static/images/SpreadOfCards_PNG.png"
            />
          </div>

          {/* Main Text */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 flex justify-center pt-8 pb-11">
            <p
              className={`${CeraCompact.className} font-light text-white text-lg leading-6 text-center tracking-tight`}
            >
              Join our Poker Run event on October 19th from 12:00pm to
              3:00pm—it&#39;s easy and free! Just visit the open houses listed
              below, collect a playing card at each house, and aim to make the
              best five-card poker hand possible. The more houses you visit, the
              more cards you collect, increasing your chances of winning. By
              5:00PM on October 19th, email a picture of your best hand to{" "}
              <Link
                className="underline font-regular"
                href="mailto:office@arrayrealestate.com"
              >
                office@arrayrealestate.com
              </Link>
              , and if your hand ranks among the top four, you&#39;ll win a
              prize! It&#39;s a fun-filled day of exploring homes and playing
              poker. See you there!
            </p>
          </div>

          {/* 7 of hearts Text */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 flex justify-center pt-4 pb-1">
            <p
              className={`${CeraCompact.className} font-bold text-white text-xl pb-4 leading-6 text-center tracking-tight `}
            >
              Participants may use the following &#34;wild card&#34; as part of
              their five-card hand:{" "}
              <strong className="font-light">7 of Hearts</strong>
            </p>
          </div>
          {/* 7 of Hearts */}
          <div className="col-span-12 flex justify-center place-items-center">
            <Image
              className="w-40 lg:w-auto "
              width={80}
              height={130}
              alt="7 of hearts card"
              src="/static/images/7ofHearts.png"
            />
          </div>

          {/* Need Help */}
          <div className="col-span-12 md:col-span-10 md:col-start-2 lg:col-span-6 lg:col-start-4 flex justify-center pt-4 pb-11">
            <p
              className={`${CeraCompact.className} font-light text-white text-base leading-6 text-center tracking-tight `}
            >
              For more information on understanding the best poker hand,{" "}
              <Link
                className="underline font-regular"
                href="https://www.cardplayer.com/rules-of-poker/hand-rankings"
              >
                click here.
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Prizes Section */}
      <div
        id="prizes"
        className="w-screen flex justify-center items-center bg-array-black min-h-96"
      >
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] pb-24 ">
          {/* Main Text */}
          <div className="col-span-12 flex justify-center pt-6">
            <h2
              className={`${Post.className} font-bold text-white text-6xl lg:text-7xl`}
            >
              PRIZES
            </h2>
          </div>

          {/* Prizes Container */}
          <div className="col-span-12 grid-cols-1 lg:grid-cols-4 grid min-h-[32rem] justify-center items-center pt-10 place-items-center">

            {/* First Place */}
            <div className="col-span-1 max-w-sm mx-10 h-[33rem] pt-10 lg:mx-2 lg:pt-auto justify-center flex flex-col">
              <div className="w-full bg-[#FFE483] h-44 px-5 flex justify-center align-center">
                <Image
                  className="object-contain"
                  src="/static/images/1ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white flex-1 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#FFC700] text-center`}
                >
                  First Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-3 text-array-black text-center`}
                >
                  <strong>
                    LET&#39;S GO KRAKEN
                  </strong>{" "}
                  <br />
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-1 text-array-black text-center`}
                >
                  Two lower section seats to see our Seattle Kraken play on a mutually agreeable date plus a $100 Kraken team store gift card and $150 gift card to use at an Amazon &quot;Just Walk Out&quot; location.
                  <p className="pt-2 italic ">
                    <p className="inline italic pt-6 pr-[.15rem] ">$500</p>
                    value
                  </p>
                </p>
              </div>
            </div>

            {/* Second Place */}
            <div className="col-span-1 max-w-sm mx-10 h-[33rem] pt-10 lg:mx-2 lg:pt-auto justify-center flex flex-col">
              <div className="w-full bg-[#ECF0FA] h-44 px-5 flex justify-center align-center">
                <Image
                  className="object-contain"
                  src="/static/images/2ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white flex-1 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#B3B8C5] text-center`}
                >
                  Second Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-3 text-array-black text-center`}
                >
                  <strong>
                    TECH TREASURE
                  </strong>{" "}
                  <br />
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-1 text-array-black text-center`}
                >
                  Apple 10.2-Inch iPad 9th generation with Wi-Fi - 64GB - Space Gray
                  <p className="pt-2 italic ">
                    <p className="inline italic pt-6 pr-[.15rem] ">$330</p>
                    value
                  </p>
                </p>
              </div>
            </div>


            {/* Third Place */}
            <div className="col-span-1 max-w-sm mx-10 h-[33rem] pt-10 lg:mx-2 lg:pt-auto justify-center flex flex-col">
              <div className="w-full bg-[#FFC57C] h-44 px-5 flex justify-center align-center">
                <Image
                  className="object-contain"
                  src="/static/images/3ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white flex-1 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#FFC57C] text-center`}
                >
                  Third Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-3 text-array-black text-center`}
                >
                  <strong>
                    CIAO TO A NIGHT OUT
                  </strong>{" "}
                  <br />
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-1 text-array-black text-center`}
                >
                  Gift Card to Cantinetta in Wallingford. $200 gift card to this chic Tuscan restaurant serving dishes made with handmade pasta.
                  <p className="pt-2 italic ">
                    <p className="inline italic pt-6 pr-[.15rem] ">$200</p>
                    value
                  </p>
                </p>
              </div>
            </div>


            {/* Fourth Place */}
            <div className="col-span-1 max-w-sm mx-10 h-[33rem] pt-10 lg:mx-2 lg:pt-auto justify-center flex flex-col">
              <div className="w-full bg-[#FF9C72] h-44 px-5 flex justify-center align-center">
                <Image
                  className="object-contain"
                  src="/static/images/4ribbon.png"
                  alt="Ribbon"
                  width={140}
                  height={140}
                />
              </div>
              <div className="w-full bg-white flex-1 px-5 py-4">
                <p
                  className={`${CeraPro.className} font-bold text-2xl text-[#FF9C72] text-center`}
                >
                  Fourth Place:
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-3 text-array-black text-center`}
                >
                  <strong>
                    GARDEN GROW-GETTER
                  </strong>{" "}
                  <br />
                </p>
                <p
                  className={`${CeraPro.className} font-regular text-lg leading-5 pt-1 text-array-black text-center`}
                >
                  Gift Card to Swansons Nursery. $100 gift card to Swansons Nursery - perfect for garden enthusiasts, offering a wide variety of plants, garden supplies, and expert advice.
                  <p className="pt-2 italic ">
                    <p className="inline italic pt-6 pr-[.15rem] ">$100</p>
                    value
                  </p>
                </p>
              </div>
            </div>





          </div>
        </div>
      </div>

      {/* Listing Header*/}
      <div
        id="listing"
        className="w-screen flex justify-center items-center bg-white min-h-96"
      >
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 flex flex-col place-items-center justify-center py-8">
            <h2
              className={`${Post.className} font-bold text-array-black text-7xl`}
            >
              OPEN HOUSES
            </h2>
            <p
              className={`${CeraCompact.className} font-bold text-2xl h-6 text-array-black`}
            >
              October 19th, 2024
            </p>
            <p
              className={`${CeraCompact.className} font-bold text-lg pb-2 text-array-black`}
            >
              12:00PM - 3:00PM PST
            </p>
          </div>
        </div>
      </div>

      {/* Listing */}
      <PropertiesContainer />

      {/* Contact Section */}
      <div
        className={`w-screen flex justify-center items-center min-h-fit pt-10 px-4 bg-gray-200`}
      >
        <div className="grid grid-cols-3 md:grid-cols-12 p-4 gap-2 mb-10 w-full max-w-[72rem] ">
          {/* Left side */}
          <div className="col-span-8 flex justify-center py-8  ">
            <div className="flex flex-col justify-center items-start w-full">
              <h2
                className={`${CeraPro.className} font-bold text-6xl lg:text-7xl text-array-black mb-5`}
              >
                Questions?
              </h2>
              <p
                className={`${CeraCompact.className} w-full font-light text-base lg:text-lg text-array-black lg:pr-5 pt-4 leading-5 mr-24`}
              >
                Feel free to ask us anything about the properties, the event, or
                the home-buying process. We&#39;re here to assist you every step
                of the way. Contact our dedicated agent, Michael, for
                personalized guidance and expert advice.
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
                <Link
                  className="underline"
                  href="mailto:michael@arrayrealestate.com"
                >
                  michael@arrayrealestate.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      <div
        id="rules"
        className="w-screen flex justify-center items-center bg-array-red min-h-96"
      >
        <div className="grid grid-cols-12 p-4 gap-2 w-full max-w-[72rem] ">
          {/* Main Text */}
          <div className="col-span-12 col-start-1 flex flex-col justify-center pt-8 pb-11">
            <p
              className={`${CeraCompact.className} w-full font-light text-white text-base leading-6 text-center tracking-tight`}
            >
              <strong className="font-medium">
                Rules: Participants in the contest must adhere to the following
                rules:
              </strong>
            </p>
            <ul
              className={`${CeraCompact.className} w-full list-disc lg:px-0 px-2 list-inside font-light text-white text-base leading-6 text-center tracking-tight`}
            >
              <li>Participants must be 18 years or older to play</li>

              <li>
                Each participant is allowed only one entry and cannot share
                cards with others.
              </li>
              <li>
                Participants must sign in at all open houses to receive a card.
              </li>
              <li>
                A complete poker hand requires a total of 5 cards, and can
                include the wild card provided by Array Real Estate.
              </li>
              <li>
                A picture of the winning hand must be submitted to
                office@arrayrealestate.com by 5:00 pm on October 19th to be
                eligible.
              </li>

              <li>
                In the event of a tie, the time of email submission to{" "}
                <Link
                  className="underline font-regular"
                  href="mailto:office@arrayrealestate.com"
                >
                  office@arrayrealestate.com
                </Link>{" "}
                will serve as the tie-breaker.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
