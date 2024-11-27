import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
`;

export const Input = styled.input`
  padding: 10px 20px;
  background-color: rgba(240, 230, 255, 0.8);
  color: #1e1e1e;
  padding-left: 5px;
  font-family: "Poppins", serif;

  &:focus {
    outline: none;
    border-color: #647872;
    box-shadow: 0 0 8px rgba(183, 255, 215, 0.6);
  }

  @media screen and (min-width: 750px) {
    padding: 10px 60px;
    padding-left: 5px;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px 90px;
    padding-left: 5px;
  }
`;

export const Para = styled.p`
  margin-bottom: 0;
  font-size: 0.8rem;
  text-align: center;
  font-family: "Poppins", serif;
`;
