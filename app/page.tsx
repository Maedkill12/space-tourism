import BackgroundImage from "./components/BackgroundImage";
import Heading from "./components/typography/Heading";

export default function Home() {
  return (
    <>
      <BackgroundImage
        desktop="bg-home-desktop"
        tablet="bg-home-tablet"
        mobile="bg-home-mobile"
      />
      <main className="z-[5] max-w-7xl mx-auto flex-1 w-full flex flex-col items-center justify-evenly md:flex-row md:justify-start md:items-end  md:pb-[100px] px-8">
        <section className="md:flex-1">
          <div className="max-w-[400px] flex flex-col items-center md:block">
            <Heading
              type={5}
              style="text-[#D0D6F9] text-center text-[16px] sm:text-[20px] md:text-[28px]"
            >
              SO, YOU WANT TO TRAVEL TO
            </Heading>
            <Heading type={1} style="text-[80px] sm:text-[150px]">
              SPACE
            </Heading>
            <p className="text-center md:text-justify text-[#D0D6F9] text-[15px] sm:text-[16px] md:text-[18px]">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </section>
        <section className="md:flex-l">
          <div className="flex justify-end">
            <div className="rounded-full w-[150px] h-[150px] sm:w-[242px] sm:h-[242px] md:w-[274px] md:h-[274px] flex justify-center items-center bg-white">
              <Heading type={4} style="text-black">
                EXPLORE
              </Heading>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
