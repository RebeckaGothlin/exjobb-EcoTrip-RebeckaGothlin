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

export const GlobalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-width: 320px;
  margin: 0 auto;
  box-sizing: border-box;
`;


export const TextContainer = styled.section`
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
// export const TextContainer = styled.div`
//   background: ${({ theme }) => theme.textContainerBackgroundColor};
//   background-size: 200% 200%;
//   animation: ${moveBackground} 10s infinite linear;
//   color: ${({ theme }) => theme.textContainerTextColor};
//   width: 100vw;
//   margin: 0 auto; /* Centrerar innehållet */
//   padding: 2rem;
//   border: none; /* Se till att ingen ram finns */
//   box-sizing: border-box;
// `;

export const TextTitle = styled.h2`
  font-family: "Poppins", serif;
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
`;

export const ParagraphText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  font-family: "Poppins", serif;

  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`;
