import styled from "styled-components";

export const TextContainer = styled.section`
  /* background-color: #4b524d;
  color: white; */
  background: ${({ theme }) => theme.textContainerBackgroundColor};
  color: ${({ theme }) => theme.textContainerTextColor};  
  padding: 40px;
  text-align: left;
`;

export const TextTitleHome = styled.h2`
  font-family: "Poppins", serif;
  font-size: 2.25rem;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

export const TextTitle = styled.h2`
  font-family: "Poppins", serif;
  font-size: 2.25rem;
  font-weight: 500;
  margin-top: 70px;
  text-align: center;
`;

export const ParagraphText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  font-family: "Poppins", serif;
`;
