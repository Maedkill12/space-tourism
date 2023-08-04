"use client";

import useDevice from "../hooks/useDevice";

type Props = {
  desktop: string;
  tablet?: string;
  mobile?: string;
};

export default function BackgroundImage({ desktop, tablet, mobile }: Props) {
  const device = useDevice();
  const bg =
    device === "mobile" && mobile !== ""
      ? mobile
      : device === "tablet" && tablet !== ""
      ? tablet
      : desktop;
  return (
    <div className={`${bg} bg-cover absolute top-0 min-h-screen min-w-full`} />
  );
}
