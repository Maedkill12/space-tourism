import { getHeadingClassName } from "@/util";
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({ weight: "400", subsets: ["latin"] });

type Props = {
  type?: 1 | 2 | 3 | 4 | 5;
  style?: string;
  children: React.ReactNode;
};

export default function Heading({ type = 1, style, children }: Props) {
  const className = getHeadingClassName(type);
  const HeadingTag = `h${type}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className={`${className} ${style}`}>{children} </HeadingTag>
  );
}
