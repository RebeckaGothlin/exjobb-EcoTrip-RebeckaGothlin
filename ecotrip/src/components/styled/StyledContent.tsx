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

const shake = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(-5px); }
  30% { transform: translateX(5px); }
  45% { transform: translateX(-5px); }
  60% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  90% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
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
  min-height: 100vh;
  box-sizing: border-box;

`;
// export const TextContainer = styled.div`
//   background: ${({ theme }) => theme.textContainerBackgroundColor};
//   background-size: 200% 200%;
//   animation: ${moveBackground} 10s infinite linear;
//   color: ${({ theme }) => theme.textContainerTextColor};
//   width: 100vw;
//   margin: 0 auto; 
//   padding: 2rem;
//   border: none; 
//   box-sizing: border-box;
// `;

export const TextTitle = styled.h2`
  font-family: "Poppins", serif;
  font-size: 2.25rem;
  font-weight: 500;
  text-align: center;
  margin-top: 60px;
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

export const StyledTable = styled.table`
  width: 100%;
  max-width: 100%;
  margin-top: 20px;
  border-collapse: collapse; 
  border: 1px solid #fff;
  table-layout: fixed;
  word-wrap: break-word; 
  &.shake {
    animation: ${shake} 0.3s ease-in-out;
  }
`;

export const StyledTableHeader = styled.thead`
  color: ${({ theme }) => theme.textContainerTextColor};
`;

export const StyledTableRow = styled.tr`
  /* &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:nth-child(odd) {
    background-color: #fff; 
  }
  &:hover {
    background-color: #f1f1f1;
  } */
`;

export const StyledTableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #fff;
  border-right: 1px solid #fff;
  word-wrap: break-word;
`;

export const StyledTableDataCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #fff;
  border-right: 1px solid #fff; 
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background: ${({ theme }) => theme.navBackgroundColor}; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.navBackgroundColor};
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${shake} 0.3s ease-in-out;
`;

export const CloseModalButton = styled.button`
  background-color: #ff4c4c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e03e3e;
  }

  &:active {
    background-color: #cc3333;
  }
`;