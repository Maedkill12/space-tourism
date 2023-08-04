import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Navbar from "./components/Navbar";

const barlow = Barlow({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space tourism",
  description: "Space tourism multi-page website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${barlow.className} min-h-screen md:pt-[40px] bg-[#0B0D17] text-white flex flex-col`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
