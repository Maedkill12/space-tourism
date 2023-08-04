import { getSubeadingClassName } from "@/util";

type Props = {
  type?: 1 | 2;
  children: React.ReactNode;
  style?: string;
};

export default function Subheading({ type = 1, children, style }: Props) {
  const className = getSubeadingClassName(type) + ` ${style}`;

  return (
    <>
      {type === 1 ? (
        <h6 className={className}>{children}</h6>
      ) : (
        <p className={className}>{children}</p>
      )}
    </>
  );
}
