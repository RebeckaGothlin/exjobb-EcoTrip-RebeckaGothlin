import styled from "styled-components";

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
  color: ${({ theme }) => theme.textContainerTextColor};
  padding: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
`;

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
`;

export const CloseModalButton = styled.button`
  background-color: transparent;
  color: ${({theme}) => theme.textContainerTextColor};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    color: #e03e3e;
  }
`;

export const TabNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.textContainerBackgroundColor || "#f5f5f5"};
  border-radius: 8px;
  margin: 20px auto;
  padding: 10px;
  width: 280px;
  border: 1px solid ${({ theme }) => theme.buttonBorderColor};
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 10px 20px;
  background: none;
  color: ${({ theme }) => theme.buttonTextColor};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: "Poppins", serif;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 20%;
    width: ${({ isActive }) => (isActive ? "60%" : "0")};
    height: 1.5px;
    background: ${({ theme }) => theme.textContainerTextColor};
    transition: all 0.3s ease;
  }

  &:hover {
    color: ${({ isActive }) => (isActive ? "none" : "#ad997a")};
  }
`;

export const SearchContainer = styled.div`
  background: ${({ theme }) => theme.navBackgroundColor};
  border-radius: 8px;
  border: 1px solid black;

  @media (min-width: 768px) {
    margin: 50px;
  }
`;

export const InfoCard = styled.div`
  background: ${({ theme }) => theme.navBackgroundColor};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.textContainerTextColor};
`;

export const CardContent = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textContainerTextColor};
`;

