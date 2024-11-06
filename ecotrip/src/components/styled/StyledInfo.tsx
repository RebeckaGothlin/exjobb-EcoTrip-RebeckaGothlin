import styled from "styled-components";

export const ParaSource = styled.p`
  text-align: left;
  font-family: "Poppins", serif;
  font-size: 0.8rem;
`;

export const SourceLinks = styled.section`
  a {
    font-family: "Poppins", serif;
    text-align: left;
    font-size: 0.8rem;
    display: block;
    color: ${({ theme }) => theme.name === 'Light' ? 'black' : 'white'};

    &:hover {
        text-decoration: underline;
    }
  }
`;
