import styled from "styled-components";

export const ContentButton = styled.button`
  background: ${({ theme }) => theme.name === "Dark" 
    ? theme.buttonBackgroundColor 
    : theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.buttonTextColor}; 
  border: ${({ theme }) => theme.name === "Light" ? theme.buttonBorderColor : "none"};
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    /* box-shadow: ${({ theme }) => theme.name === "Dark" 
      ? "rgba(255, 148, 7, 0.35) 0 -25px 18px -14px inset, rgba(44, 187, 99, .25) 0 1px 2px, rgba(44, 187, 99, .25) 0 2px 4px, rgba(44, 187, 99, .25) 0 4px 8px, rgba(44, 187, 99, .25) 0 8px 16px, rgba(44, 187, 99, .25) 0 16px 32px"
      : "0 0 10px rgba(0, 0, 0, 0.1)"}; */
    transform: scale(1.05) rotate(-1deg);
  }

  &:focus {
    outline: none;
  }  
`;
export const LinkButton = styled.button`
  background-color: white;
  font-weight: 400;
  font-family: 'Poppins', serif;
  padding: 0 15px;
  height: 40px;
  font-size: 0.9rem;
  margin-top: 5px;
  color: ${({ theme }) => theme.linkButtonTextColor};
  background: ${({ theme }) => theme.linkButtonBackgroundColor};
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 0 20px;
    height: 40px;
    font-size: 1.2rem;
    margin-top: 10px;
    font-weight: 500;
  }
`;

