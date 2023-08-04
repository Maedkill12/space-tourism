"use client";

import Image from "next/image";
import Heading from "../components/typography/Heading";
import { destinations } from "@/util/constants";
import NavItem from "../components/typography/NavItem";
import { useState } from "react";
import Subheading from "../components/typography/Subheading";

export default function Destination() {
  const [destinationSelected, setDestinationSelected] = useState(
    destinations[0]
  );

  return (
    <>
      <section className="md:flex-1 flex flex-col gap-8 md:gap-16 px-8 h-full md:pb-[100px] w-full md:w-auto">
        <Heading type={5} style="mt-4 md:mt-24 text-[20px] md:text-[28px]">
          <span className="font-bold text-gray-500">01</span> PICK YOUR
          DESTINATION
        </Heading>
        <div className="max-w-[445px] max-h-[445px] self-center md:self-auto md:ml-[40px] h-[150px] w-[150px] md:h-[300px] md:w-[300px] lg:w-auto lg:h-auto">
          <Image
            src={`/${destinationSelected.image}`}
            alt={destinationSelected.name}
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain w-full"
          />
        </div>
      </section>
      <section className="flex-1 md:flex-auto px-8 max-w-[445px] md:pb-[100px] mt-10 md:mt-0">
        <div className="flex gap-5 justify-center md:justify-start">
          {destinations.map((destination) => (
            <NavItem
              key={destination.description}
              style="text-[#D0D6F9] border-b-2 border-transparent hover:border-white h-full flex flex-col justify-center"
              isActive={destination.name === destinationSelected.name}
              activeStyle="text-white border-white"
              onClick={() => setDestinationSelected(destination)}
            >
              {destination.name.toUpperCase()}
            </NavItem>
          ))}
        </div>
        <Heading
          type={2}
          style="text-[56px] md:text-[80px] text-center md:text-start"
        >
          {destinationSelected.name.toUpperCase()}
        </Heading>
        <p className="text-[#D0D6F9] w-full text-justify mb-6 md:mb-10 text-[15px] sm:text-[16px] md:text-[18px]">
          {destinationSelected.description}
        </p>
        <hr className="mb-6 md:mb-8" />
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 md:justify-between">
          <div className="text-center md:text-start">
            <Subheading type={2} style="text-[#D0D6F9]">
              AVG. DISTANCE
            </Subheading>
            <Subheading type={1}>
              {destinationSelected.distance.toUpperCase()}
            </Subheading>
          </div>
          <div className="text-center md:text-start">
            <Subheading type={2} style="text-[#D0D6F9]">
              EST. TRAVEL TIME
            </Subheading>
            <Subheading type={1}>
              {destinationSelected.time.toUpperCase()}
            </Subheading>
          </div>
        </div>
      </section>
    </>
  );
}
