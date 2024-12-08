import { useState } from "react";
import { FAQContainer, Question, Answer } from "../components/styled/StyledFAQ";
import { Navbar } from "../components/Navbar";
import { TextContainer, TextTitle } from "../components/styled/StyledContent";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setActiveQuestion((prev) => (prev === question ? null : question));
  };

  const questionsAndAnswers = [
    {
      id: "question1",
      question: "What is the purpose of this tool?",
      answer: "This tool helps you calculate the carbon dioxide emissions for various transportation options like cars, trains, buses, and planes based on the distance between two cities."
    },
    {
      id: "question2",
      question: "How are the emissions calculated?",
      answer: "The emissions are calculated based on the distance between the two cities and the specific emission factors for each mode of transportation. The Haversine formula is used to calculate the distance between the two locations."
    },
    {
      id: "question3",
      question: "What is the Haversine formula?",
      answer: "The Haversine formula is an equation used to calculate the distance between two points on the Earth's surface using their latitude and longitude. This formula takes into account the spherical shape of the Earth."
    },
    {
      id: "question4",
      question: "Can I save my calculations for later?",
      answer: "Yes, you can save your calculations by clicking the 'Save' button after calculating the emissions. Your saved searches will be stored and accessible in the history section."
    },
    {
      id: "question5",
      question: "What if I enter the wrong city name?",
      answer: "If the city name is incorrect or misspelled, the tool might not be able to find the coordinates, and an error message will be displayed. Please make sure the city name is spelled correctly."
    },
    {
      id: "question6",
      question: "How can I use the map to calculate emissions?",
      answer: "Instead of typing the city names, you can click on the map to select the origin and destination points. The tool will automatically calculate the emissions based on the locations you select."
    },
    {
      id: "question7",
      question: "How accurate is the emissions data?",
      answer: "The emissions data is based on average emission factors for each transportation mode. While this provides a useful estimate, it may vary depending on specific circumstances like vehicle type, fuel used, and route taken."
    }
  ];

  return (
    <>
      <Navbar />
      <TextContainer>
        <TextTitle>Frequently Asked Questions</TextTitle>
        <FAQContainer>
          {questionsAndAnswers.map(({ id, question, answer }) => (
            <div key={id}>
              <Question onClick={() => toggleQuestion(id)}>
                <span>{question}</span>
                {activeQuestion === id ? (
                  <IoIosArrowUp size={24} />
                ) : (
                  <IoIosArrowDown size={24} />
                )}
              </Question>
              {activeQuestion === id && <Answer>{answer}</Answer>}
            </div>
          ))}
        </FAQContainer>
      </TextContainer>
    </>
  );
};
