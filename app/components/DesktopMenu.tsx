import React from "react";

type Props = {
  children: (style: string) => React.ReactNode;
};

export default function DesktopMenu({ children }: Props) {
  return (
    <nav className="hidden h-full flex-row items-center gap-4 px-3 backdrop-blur-xl sm:flex md:gap-12 md:px-7 lg:gap-20 lg:px-14 xl:gap-28 xl:px-28">
      {children(
        "border-b-2 border-transparent hover:border-white h-full flex flex-col justify-center",
      )}
    </nav>
  );
}
