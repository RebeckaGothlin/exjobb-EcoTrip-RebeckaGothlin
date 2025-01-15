import { Navbar } from "../components/Navbar";
import {
  CardContent,
  CardTitle,
  InfoCard,
  TextContainer,
  TextTitle,

} from "../components/styled/StyledContent";
import { FlexContainer } from "../components/styled/StyledInfo";

export const Info = () => {
  return (
    <>
      <Navbar />
      <TextContainer>
        <TextTitle>Information</TextTitle>

        <FlexContainer>
          <InfoCard>
            <img src="/src/assets/img/river-green.jpg" alt="A river surrounded by forested hills under a clear sky." loading="lazy"/>
            <CardTitle>The Impact of Carbon Emissions on Nature and People</CardTitle>
            <CardContent>
              Carbon dioxide (CO₂) emissions from human activities, like driving cars and flying planes, are a leading cause of climate change. These emissions trap heat in the atmosphere, causing global temperatures to rise. As a result, we experience more frequent natural disasters, melting ice caps, and rising sea levels, all of which threaten ecosystems and human populations.
            </CardContent>
          </InfoCard>

          <InfoCard>
            <img src="/src/assets/img/train-snow.jpg" alt="A vintage blue train on a snowy track surrounded by snow-covered trees under a bright blue sky." loading="lazy" />
            <CardTitle>Why Trains Are Better Than Planes and Cars for the Environment</CardTitle>
            <CardContent>
              Choosing trains over planes or cars is one way to significantly reduce your carbon footprint. Trains emit far less CO₂ per passenger and are more energy-efficient. Many trains are powered by electricity, and when that electricity comes from renewable sources, the emissions are nearly zero.
            </CardContent>
          </InfoCard>
        </FlexContainer>
      </TextContainer>
    </>
  );
};
