import React from "react";

type Props = {
  children: (style: string) => React.ReactNode;
  isOpen?: boolean;
  closeMenu: () => void;
};

export default function MobileMenu({
  children,
  isOpen = false,
  closeMenu,
}: Props) {
  return (
    <>
      {isOpen ? (
        <div
          onClick={closeMenu}
          className="absolute bottom-0 right-0 flex min-h-screen w-2/3 flex-col gap-8 px-4 pt-24 backdrop-blur-[100px]"
        >
          {children("text-[16px]")}
        </div>
      ) : null}
    </>
  );
}
