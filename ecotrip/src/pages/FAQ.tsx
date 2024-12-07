import { useState } from "react";
import { FAQContainer, Question, Answer } from "../components/styled/StyledFAQ";
import { Navbar } from "../components/Navbar";
import { TextContainer, TextTitle } from "../components/styled/StyledContent";

export const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setActiveQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <>
      <Navbar />
      <TextContainer>
        <TextTitle>Frequently Asked Questions</TextTitle>
        <FAQContainer>
          <div>
            <Question onClick={() => toggleQuestion("question1")}>
              What is the purpose of this tool?
            </Question>
            {activeQuestion === "question1" && (
              <Answer>
                This tool helps you calculate the carbon dioxide emissions for
                various transportation options like cars, trains, buses, and
                planes based on the distance between two cities.
              </Answer>
            )}
          </div>

          <div>
            <Question onClick={() => toggleQuestion("question2")}>
              How are the emissions calculated?
            </Question>
            {activeQuestion === "question2" && (
              <Answer>
                The emissions are calculated based on the distance between the
                two cities and the specific emission factors for each mode of
                transportation. The Haversine formula is used to calculate the
                distance between the two locations.
              </Answer>
            )}
          </div>

          <div>
            <Question onClick={() => toggleQuestion("question3")}>
              What is the Haversine formula?
            </Question>
            {activeQuestion === "question3" && (
              <Answer>
                The Haversine formula is an equation used to calculate the
                distance between two points on the Earth's surface using their
                latitude and longitude. This formula takes into account the
                spherical shape of the Earth.
              </Answer>
            )}
          </div>

          <div>
            <Question onClick={() => toggleQuestion("question4")}>
              Can I save my calculations for later?
            </Question>
            {activeQuestion === "question4" && (
              <Answer>
                Yes, you can save your calculations by clicking the "Save"
                button after calculating the emissions. Your saved searches will
                be stored and accessible in the history section.
              </Answer>
            )}
          </div>

          <div>
            <Question onClick={() => toggleQuestion("question5")}>
              What if I enter the wrong city name?
            </Question>
            {activeQuestion === "question5" && (
              <Answer>
                If the city name is incorrect or misspelled, the tool might not
                be able to find the coordinates, and an error message will be
                displayed. Please make sure the city name is spelled correctly.
              </Answer>
            )}
          </div>

          <div>
            <Question onClick={() => toggleQuestion("question6")}>
              How can I use the map to calculate emissions?
            </Question>
            {activeQuestion === "question6" && (
              <Answer>
                Instead of typing the city names, you can click on the map to
                select the origin and destination points. The tool will
                automatically calculate the emissions based on the locations you
                select.
              </Answer>
            )}
          </div>

          <div>
            <Question onClick={() => toggleQuestion("question7")}>
              How accurate is the emissions data?
            </Question>
            {activeQuestion === "question7" && (
              <Answer>
                The emissions data is based on average emission factors for each
                transportation mode. While this provides a useful estimate, it
                may vary depending on specific circumstances like vehicle type,
                fuel used, and route taken.
              </Answer>
            )}
          </div>
        </FAQContainer>
      </TextContainer>
    </>
  );
};
