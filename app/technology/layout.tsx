import BackgroundImage from "../components/BackgroundImage";
import Container from "../components/Container";

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundImage
        desktop="bg-technology-desktop"
        tablet="bg-technology-tablet"
        mobile="bg-technology-mobile"
      />
      <Container>{children}</Container>
    </>
  );
}
