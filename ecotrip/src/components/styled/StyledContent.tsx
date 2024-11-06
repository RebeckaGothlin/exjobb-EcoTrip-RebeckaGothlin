import styled from "styled-components";

export const TextContainer = styled.section`
  /* background-color: #4b524d;
  color: white; */
  background-color: ${({ theme }) => theme.textContainerBackgroundColor};
  color: ${({ theme }) => theme.textContainerTextColor};  
  padding: 40px;
  text-align: left;
`;

export const TextTitle = styled.h2`
  font-family: "Poppins", serif;
  font-size: 36px;
  text-align: center;
`;

export const ParagraphText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-family: "Poppins", serif;
`;
