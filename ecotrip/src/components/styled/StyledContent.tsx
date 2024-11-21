import styled, { keyframes } from "styled-components";

const moveBackground = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
`;

export const TextContainer = styled.section`
  /* background: ${({ theme }) => theme.textContainerBackgroundColor};
  color: ${({ theme }) => theme.textContainerTextColor};   */
  background: ${({ theme }) => theme.textContainerBackgroundColor};
  background-size: 200% 200%; /* Gör gradienterna större för att möjliggöra rörelse */
  animation: ${moveBackground} 10s infinite linear; /* Animerar bakgrundens rörelse */
  color: ${({ theme }) => theme.textContainerTextColor};  
  padding: 40px;
  text-align: left;
`;

export const TextTitle = styled.h2`
  font-family: "Poppins", serif;
  font-size: 2.25rem;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

export const ParagraphText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  font-family: "Poppins", serif;
`;
