import { Navbar } from "../components/Navbar";
import {
  CardContent,
  CardTitle,
  InfoCard,
  TextContainer,
  TextTitle,

} from "../components/styled/StyledContent";
// import { ParaSource, SourceLinks } from "../components/styled/StyledInfo";

export const Info = () => {
  return (
    <>
      <Navbar />
      <TextContainer>
        <TextTitle>Information</TextTitle>

        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          <InfoCard>
            <CardTitle>The Impact of Carbon Emissions on Nature and People</CardTitle>
            <CardContent>
              Carbon dioxide (CO₂) emissions from human activities, like driving cars and flying planes, are a leading cause of climate change. These emissions trap heat in the atmosphere, causing global temperatures to rise. As a result, we experience more frequent natural disasters, melting ice caps, and rising sea levels, all of which threaten ecosystems and human populations.
            </CardContent>
          </InfoCard>

          <InfoCard>
            <CardTitle>Why Trains Are Better Than Planes and Cars for the Environment</CardTitle>
            <CardContent>
              Choosing trains over planes or cars is one way to significantly reduce your carbon footprint. Trains emit far less CO₂ per passenger and are more energy-efficient. Many trains are powered by electricity, and when that electricity comes from renewable sources, the emissions are nearly zero.
            </CardContent>
          </InfoCard>
        </div>

        {/* <ParaSource>Sources:</ParaSource>
        <SourceLinks>
          <a
            href="https://www.ipcc.ch/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the official website of the Intergovernmental Panel on Climate Change"
          >
            The Intergovernmental Panel on Climate Change (IPCC)
          </a>
          <a
            href="https://www.unep.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the official website of the United Nations Environment Programme"
          >
            United Nations Environment Programme (UNEP)
          </a>
          <a
            href="https://www.who.int/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the official website of the World Health Organization"
          >
            World Health Organization (WHO)
          </a>
          <a
            href="https://uic.org/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit the official website of the International Union of Railways"
          >
            International Union of Railways (UIC)
          </a>
        </SourceLinks> */}
      </TextContainer>
    </>
  );
};
