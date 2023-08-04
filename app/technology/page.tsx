"use client";

import { rockets } from "@/util/constants";
import Heading from "../components/typography/Heading";
import Subheading from "../components/typography/Subheading";
import { useState } from "react";
import Image from "next/image";

export default function Technology() {
  const [rocketSelected, setRocketSelected] = useState(rockets[0]);
  return (
    <>
      <section className="md:order-0 order-1 flex h-full flex-1 flex-col gap-4 px-8 pb-[100px] sm:gap-16 md:gap-32">
        <Heading
          type={5}
          style="mt-4 md:mt-24 text-[20px] md:text-[28px] absolute top-[92px] text-center sm:text-start sm:static"
        >
          <span className="font-bold text-gray-500">01</span> SPACE LAUNCH 101
        </Heading>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          <div className="flex flex-row justify-around gap-4 sm:flex-col sm:justify-between">
            {rockets.map((rocket, index) => (
              <div
                key={rocket.name}
                onClick={() => setRocketSelected(rocket)}
                className={`flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border border-gray-500 sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] ${
                  rocket.name === rocketSelected.name
                    ? "bg-white text-black"
                    : "bg-[#0B0D17]"
                }`}
              >
                <Heading type={4}>{index}</Heading>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <Subheading
              type={2}
              style="text-[#D0D6F9] text-center sm:text-start"
            >
              THE TERMINOLOGY…
            </Subheading>
            <Heading
              type={3}
              style="text-[24px] sm:text-[40px] md:text-[56px] text-center sm:text-start"
            >
              {rocketSelected.name.toUpperCase()}
            </Heading>
            <p className="mt-5 max-w-[444px] text-center text-[#D0D6F9] sm:text-start">
              {rocketSelected.description}
            </p>
          </div>
        </div>
      </section>
      <section className="order-0 mb-4 mt-[43px] h-full flex-1 sm:mb-0 sm:mt-0 md:order-1">
        <div className="flex h-[527px] max-h-[310px] w-screen items-center md:absolute md:bottom-0 md:right-0 md:top-0 md:my-auto md:max-h-[527px] md:w-auto md:min-w-[350px] md:max-w-[515px]">
          <Image
            src={`/${rocketSelected.images.portrait}`}
            alt={rocketSelected.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full object-cover md:h-auto"
          />
        </div>
      </section>
    </>
  );
}
