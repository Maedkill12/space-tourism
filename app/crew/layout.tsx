import BackgroundImage from "../components/BackgroundImage";
import Container from "../components/Container";

export default function CrewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BackgroundImage
        desktop="bg-crew-desktop"
        tablet="bg-crew-tablet"
        mobile="bg-crew-mobile"
      />
      <Container>{children}</Container>
    </>
  );
}
