import { Bellefair } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({ weight: "400", subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export function getHeadingClassName(type: 1 | 2 | 3 | 4 | 5) {
  switch (type) {
    case 2:
      return `${bellefair.className} lg:text-[100px]`;
    case 3:
      return `${bellefair.className} lg:text-[58px]`;
    case 4:
      return `${bellefair.className} lg:text-[32px]`;
    case 5:
      return `${barlowCondensed.className} tracking-[4.75px]`;
    default:
      return `${bellefair.className}`;
  }
}

export function getSubeadingClassName(type: 1 | 2) {
  switch (type) {
    case 2:
      return `${barlowCondensed.className} text-[14px] tracking-[2.35px]`;
    default:
      return `${bellefair.className} text-[28px]`;
  }
}
