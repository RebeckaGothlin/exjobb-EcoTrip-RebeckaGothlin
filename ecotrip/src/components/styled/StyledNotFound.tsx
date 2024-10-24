import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  .img-container-404 {
    img {
      max-width: 100%;
    }
  }

  p {
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.5rem; 
    }

    @media (min-width: 1024px) {
      font-size: 1.8rem; 
    }
  }

  .back-a {
    margin-top: 20px;
    font-size: 1rem;
    text-decoration: none;
    color: white;
    text-decoration: underline;
    &:hover {
      color: white;
      text-decoration-thickness: 1px;
    }
  }
`;
