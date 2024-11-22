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
  background-size: 200% 200%; 
  animation: ${moveBackground} 10s infinite linear; 
  color: ${({ theme }) => theme.textContainerTextColor};  
  padding: 40px;
  text-align: left;
// 
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
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
