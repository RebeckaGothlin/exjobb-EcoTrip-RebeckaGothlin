import { HeaderNav } from "../components/HeaderNav";
import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { ParaSource, SourceLinks } from "../components/styled/StyledInfo";

export const Info = () => {
  return (
    <>
      <HeaderNav></HeaderNav>
      <TextContainer>
        <TextTitle>Information</TextTitle>
        <ParagraphText>
          The Impact of Carbon Emissions on Nature and People Carbon dioxide
          (CO₂) emissions from human activities, like driving cars and flying
          planes, are a leading cause of climate change. These emissions trap
          heat in the atmosphere, causing global temperatures to rise. As a
          result, we experience more frequent natural disasters, melting ice
          caps, and rising sea levels, all of which threaten ecosystems and
          human populations. Carbon emissions also contribute to air pollution,
          which increases the risk of respiratory diseases and worsens global
          health. If we continue emitting CO₂ at current rates, we face severe
          consequences, such as widespread habitat loss, food and water
          shortages, and the displacement of millions due to rising sea levels
          and extreme weather. The longer we delay action, the harder it will be
          to reverse the damage caused to both nature and human civilization.
          Why Trains Are Better Than Planes and Cars for the Environment
          Choosing trains over planes or cars is one way to significantly reduce
          your carbon footprint. Trains emit far less CO₂ per passenger and are
          more energy-efficient. Many trains are powered by electricity, and
          when that electricity comes from renewable sources, the emissions are
          nearly zero. Trains also have a longer lifespan and require less land
          use compared to airports and highways, making them the more
          sustainable choice for the future.
        </ParagraphText>
        <ParaSource>Sources:</ParaSource>
        <SourceLinks>
          <a href="https://www.ipcc.ch/" target="_blank">
            The Intergovernmental Panel on Climate Change (IPCC)
          </a>
          <a href="https://www.unep.org/" target="_blank">
            United Nations Environment Programme (UNEP)
          </a>
          <a href="https://www.who.int/" target="_blank">
            World Health Organization (WHO)
          </a>
          <a href="https://uic.org/" target="_blank">
            International Union of Railways (UIC)
          </a>
        </SourceLinks>
      </TextContainer>
    </>
  );
};
