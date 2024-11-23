import HeaderNav from "../components/HeaderNav";
import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";

export const About = () => {
  return (
    <>
      <HeaderNav></HeaderNav>
      <TextContainer>
        <TextTitle>About</TextTitle>
        <ParagraphText>
          This website was developed as part of my final thesis project during
          my studies in Frontend Development at Medieinstitutet. I am passionate
          about environmental sustainability and recognize the importance of
          reducing our carbon footprint. This platform aims to provide users
          with the ability to calculate carbon emissions for various modes of
          transportation between different cities. By offering this tool, I hope
          to raise awareness about the impact of our travel choices and
          encourage individuals to make more eco-friendly decisions. My vision
          is to create a user-friendly experience that empowers everyone to
          understand their carbon emissions and take actionable steps towards a
          more sustainable future. Thank you for visiting, and I hope you find
          this tool valuable in your journey toward sustainability.
        </ParagraphText>
      </TextContainer>
    </>
  );
};
