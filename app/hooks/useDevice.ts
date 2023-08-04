"use client";

import { useEffect, useState } from "react";

type Device = "desktop" | "tablet" | "mobile" | undefined;

const useDevice = () => {
  const [device, setDevice] = useState<Device>();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setDevice("desktop");
      } else if (width >= 640) {
        setDevice("tablet");
      } else {
        setDevice("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

export default useDevice;
