import { Header } from "../components/Header";
import { TextContainer, TextTitle } from "../components/styled/StyledContent";
import { StyledLink } from "../components/styled/StyledLinks";

export const Home = () => {
  return (
    <>
      <Header></Header>
      <TextContainer>
        <TextTitle>Introduction</TextTitle>
        Traveling is a hobby for many, but it comes at a cost to the
        environment. Transport options like flights and cars release significant
        amounts of carbon dioxide, contributing to climate change, which affects
        our health and the planet. On EcoTrip, you can compare emissions from
        different transport modes like flights, cars, and trains, helping you
        make more informed choices to reduce your environmental impact. Click on
        “Calculate” in the top navigation bar to compare emissions for different
        transport options, or click{" "}
        <StyledLink href="/calculate">here</StyledLink> to go there directly.
      </TextContainer>
    </>
  );
};
