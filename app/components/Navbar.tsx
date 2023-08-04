"use client";

import { menu } from "@/util/constants";
import NavItem from "./typography/NavItem";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useDevice from "../hooks/useDevice";
import { useState } from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const device = useDevice();
  const pathname = usePathname();

  const MenuWrapper = device === "mobile" ? MobileMenu : DesktopMenu;

  return (
    <header className="z-10 flex h-[96px] w-screen flex-row items-center justify-between">
      <div className="ml-[20px] flex h-full flex-1 flex-row items-center md:ml-[55px]">
        <Image
          src="/logo.svg"
          alt="logo"
          width={device === "mobile" ? 40 : 48}
          height={device === "mobile" ? 40 : 48}
        />
        <div className="hidden h-[1px] flex-1 bg-[#979797] md:block" />
      </div>

      <MenuWrapper
        isOpen={isMobileMenuOpen}
        closeMenu={() => setIsMobileMenuOpen(false)}
      >
        {(style) =>
          menu.map((item, index) => (
            <NavItem
              key={item.name}
              path={item.path}
              style={style}
              activeStyle="border-white"
              isActive={pathname === item.path}
            >
              <span className={"font-bold"}>0{index} </span>
              {item.name}
            </NavItem>
          ))
        }
      </MenuWrapper>

      {device === "mobile" && (
        <div className="z-10 mr-[20px] flex h-full items-center">
          <Image
            src={isMobileMenuOpen ? "/icon-close.svg" : "/icon-hamburger.svg"}
            alt="menu icon"
            width={24}
            height={21}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      )}
    </header>
  );
}
