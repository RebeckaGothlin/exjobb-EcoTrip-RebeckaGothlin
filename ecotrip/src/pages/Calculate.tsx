import { Header } from "../components/Header";
import {
  ParagraphText,
  TextContainer,
  TextTitle,
} from "../components/styled/StyledContent";
import { Form, Input, Para } from "../components/styled/StyledForm";
import { Button } from "../components/styled/StyledButtons";
import { FormEvent, useState } from "react";

export const Calculate = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [result, setResult] = useState("");

  const handleClick = () => {
    setResult(from + to);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleClick();
    setFrom("");
    setTo("");
  }

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
          <Form onSubmit={handleSubmit}>
            <Para>I want to travel from:</Para>
            <Input type="text" value={from} placeholder="From.." onChange={(e) => setFrom(e.target.value)}/>
            <Para>I want to travel to:</Para>
            <Input type="text" value={to} placeholder="To.." onChange={(e) => setTo(e.target.value)}/>
            <Button onClick={handleClick}>Calculate</Button>
          </Form>
          {result && (
            <ParagraphText>{result}</ParagraphText>
          )}
        </ParagraphText>
      </TextContainer>
    </>
  );
};
