import styled from "styled-components";

export const Form = styled.form`
  text-align: center;
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 10px;
  
  @media screen and (min-width: 768px) {
    flex-direction: row; 
    justify-content: center; 
    display: block;
  }
`;

export const Input = styled.input`
  padding: 10px 20px;
  background-color: rgba(255, 251, 246, 0.8);
  color: #1e1e1e;
  padding-left: 5px;
  font-family: "Poppins", serif;
  border-radius: 8px;
  width: calc(100% - 20px);
  margin-top: 10px;
  border: 1px solid black;

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(255, 235, 190, 0.6);
  }

  @media (min-width: 768px) {
    padding: 10px 60px;
    padding-left: 5px;
    width: auto;
    margin: 10px 10px;
  }

  @media (min-width: 1024px) {
    padding: 10px 100px;
    padding-left: 5px;
  }
`;

export const Para = styled.p`
  margin-bottom: 0;
  font-size: 0.8rem;
  text-align: center;
  font-family: "Poppins", serif;
`;
