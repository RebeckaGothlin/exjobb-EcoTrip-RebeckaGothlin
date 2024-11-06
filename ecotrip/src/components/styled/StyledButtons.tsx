import styled from "styled-components";

export const ContentButton = styled.button`
  background-color: #81988f;
  font-weight: 400;
  font-family: 'Poppins', serif;
  display: block;
  margin: 0 auto;
  margin-top: 20px;

  &:hover {
    background-color: #79817a;
    border: 1px solid grey;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  font-weight: 400;
  font-family: 'Poppins', serif;
  padding: 0 25px;
  height: 35px;
  border: 1.5px solid ${({ theme }) => theme.name === 'Light' ? 'black' : 'white'};
  color: ${({ theme }) => theme.name === 'Light' ? 'black' : 'white'};
  margin-left: auto;
  cursor: pointer;
  &:hover {
    border: 2px solid ${({ theme }) => theme.name === 'Light' ? 'black' : 'white'};;
  }
`;
