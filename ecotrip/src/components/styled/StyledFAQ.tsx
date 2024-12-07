import styled from "styled-components";

export const FAQContainer = styled.div`
  width: calc(100vw - 100px);
  margin: 0 auto;
  font-family: 'Poppins';
  border: 1px solid #b2a595;
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

  &:hover {
    background-color: #b2a595;
  }
`;

export const Answer = styled.p`
  font-size: 1rem;
  background: ${({ theme }) => theme.navBackgroundColor};
  margin: 0;
  padding: 10px 20px;
  border-bottom: 1px solid #b2a595;
`;
