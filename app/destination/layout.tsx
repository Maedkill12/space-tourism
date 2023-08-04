import BackgroundImage from "../components/BackgroundImage";
import Container from "../components/Container";

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundImage
        desktop="bg-destination-desktop"
        tablet="bg-destination-tablet"
        mobile="bg-destination-mobile"
      />
      <Container>{children}</Container>
    </>
  );
}
