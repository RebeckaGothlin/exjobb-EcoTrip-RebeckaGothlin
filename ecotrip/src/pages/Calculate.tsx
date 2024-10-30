import { Header } from "../components/Header";
import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import { Button } from "../components/styled/StyledButtons";

export const Calculate = () => {
  return (
    <>
      <Header></Header>
      <TextContainer>
        <TextTitle>Calculate</TextTitle>
        <ParagraphText>
          Here you can calculate the carbon dioxide emissions from different
          transportation options. Enter the name of the city you want to depart
          from and the city you want to travel to, then press the "Calculate"
          button to estimate emissions for different travel methods – plane,
          car, bus, and train.
          <Form>
            <Para>I want to travel from:</Para>
            <Input type="text" placeholder="From.." />
            <Para>I want to travel to:</Para>
            <Input type="text" placeholder="To.." />
            <Button>Calculate</Button>
          </Form>
        </ParagraphText>
      </TextContainer>
    </>
  );
};
