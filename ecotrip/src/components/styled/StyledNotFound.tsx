import styled from "styled-components";

export const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${({ theme }) => theme.textContainerTextColor};
  background: ${({ theme }) => theme.textContainerBackgroundColor};
  min-height: 100vh;

  .img-container-404 {
    img {
      max-width: 60%;
    }
  }
`;


export const StyledTitle = styled.h3`
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 1.8rem;
  font-weight: 500;
  
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }
`;

export const StyledDescription = styled.p`
  margin-bottom: 32px;
  font-size: 1rem;
  width: 80%;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    width: 70%;
  }

  @media (min-width: 1024px) {
    font-size: 1rem;
    width: 60%;
  }
`;