import { Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Props = {
  children: React.ReactNode;
  path?: string;
  style?: string;
  activeStyle?: string;
  isActive?: boolean;
  onClick?: () => void;
};

export default function NavItem({
  activeStyle,
  children,
  style,
  path = "",
  isActive = false,
  onClick,
}: Props) {
  return (
    <Link
      onClick={onClick}
      href={path}
      className={`${
        barlowCondensed.className
      } text-[14px] md:text-[16px] tracking-[2.36px] md:tracking-[2.7px] ${style} ${
        isActive ? activeStyle : ""
      }`}
    >
      <p>{children}</p>
    </Link>
  );
}
