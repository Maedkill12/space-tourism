"use client";

import { crew } from "@/util/constants";
import Heading from "../components/typography/Heading";
import { useState } from "react";
import Image from "next/image";

export default function Crew() {
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);
  return (
    <>
      <section className="sm:order-0 order-1 flex h-full w-full flex-1 flex-col items-center justify-between px-8 md:w-auto md:items-start md:pb-[100px]">
        <Heading
          type={5}
          style="sm:mt-4 md:mt-24 w-full md:w-auto text-[20px] md:text-[28px] absolute top-[96px] text-center sm:text-start sm:static"
        >
          <span className="font-bold text-gray-500">02</span> MEET YOUR CREW
        </Heading>
        <div className="sm:order-0 order-1 flex flex-col items-center md:items-start">
          <Heading
            type={4}
            style="mt-5 sm:mt-0 text-gray-500 text-[16px] sm:text-[24px] md:text-[32px]"
          >
            {selectedCrew.position.toUpperCase()}
          </Heading>
          <Heading type={3} style="text-[24px] sm:text-[40px] md:text-[56px]">
            {selectedCrew.name.toUpperCase()}
          </Heading>
          <p className="mt-6 max-w-[445px] text-center text-[15px] text-base text-[#D0D6F9] sm:text-[16px] md:text-start md:text-[18px] md:text-lg">
            {selectedCrew.description}
          </p>
        </div>
        <div className="order-0 mt-6 flex gap-5 sm:order-1 md:mt-0">
          {crew.map((person) => (
            <div
              onClick={() => setSelectedCrew(person)}
              key={person.name}
              className={`h-[15px] w-[15px] cursor-pointer  rounded-full ${
                person.name === selectedCrew.name ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </section>
      <section className="order-0 mt-6 flex h-[223px] w-[327px] justify-center  pt-[20px] sm:order-1 sm:mt-0 sm:max-h-[572px] sm:min-h-[572px] sm:max-w-[450px] sm:justify-normal md:max-h-[712px] md:flex-1 md:pt-[100px]">
        <Image
          src={`/${selectedCrew.image}`}
          alt={selectedCrew.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-auto"
        />
      </section>
    </>
  );
}
