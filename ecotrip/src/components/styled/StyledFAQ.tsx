import styled from "styled-components";

export const FAQContainer = styled.div`
  width: calc(100vw - 100px);
  margin: 0 auto;
  font-family: 'Poppins';
  border: 1px solid #b2a595;

  @media (min-width: 768px) {
    width: calc(100vw - 200px);
  }

  @media (min-width: 1024px) {
    width: calc(100vw - 500px);
  }
`;

export const Question = styled.h2`
 font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textContainerTextColor};
  cursor: pointer;
  margin: 0;
  padding: 10px;
  background: ${({ theme }) => theme.navBackgroundColor};
  transition: background-color 0.3s;
  border-bottom: 1px solid #b2a595;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const Answer = styled.p`
  font-size: 1rem;
  background: ${({ theme }) => theme.navBackgroundColor};
  margin: 0;
  padding: 10px 20px;
  border-bottom: 1px solid #b2a595;
  border-left: 4px solid #b2a595;
`;

export const Arrow = styled.span<{ isActive: boolean }>`
  font-size: 1.2rem;
  margin-left: 10px;
  transition: transform 0.3s ease; 
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  will-change: transform; 
`;