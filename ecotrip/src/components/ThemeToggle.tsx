import { useContext } from "react";
import { ThemeDispatchContext } from "../contexts/ThemeDispatchContext";
import { ThemeContext } from "styled-components";
import { ThemeActionTypes } from "../reducers/ThemesReducer";
import { themes } from "../models/Theme";
import { FaSun, FaMoon } from "react-icons/fa"; 

import styled from "styled-components";

const ToggleContainer = styled.div`
  margin-right: 15px;
  margin-left: auto;
`;

const ToggleLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
`;

const ToggleInput = styled.input`
  display: none;
`;

const Slider = styled.span`
  width: 60px;
  height: 34px;
  background: ${({ theme }) => theme.sliderBackgroundColor};
  border: ${({ theme }) => theme.sliderBorderColor};
  /* background: linear-gradient(#004E41, #51b8a7); */
  border-radius: 50px;
  position: relative;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  
  ${ToggleInput}:checked + & {
    background: ${({ theme }) => theme.name === "Light" ? theme.sliderBackgroundColor : "linear-gradient(#51b8a7, #004E41)"};
  }

  &::before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: 4px;
    transition: 0.4s;
    /* background-color: white; */
    background-color: ${({ theme }) => theme.name === "Light" ? "black" : "white"};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(25px);
  }
`;

const SunIcon = styled(FaSun)`
  font-size: 18px;
  /* color: white; */
  color: ${({ theme }) => theme.name === "Light" ? "black" : "white"};
`;

const MoonIcon = styled(FaMoon)`
  font-size: 18px;
  /* color: white; */
  color: ${({ theme }) => theme.name === "Light" ? "black" : "white"};
`;

const ThemeToggle = () => {
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);

  const handleToggle = () => {
    dispatch({ type: ThemeActionTypes.TOGGLED, payload: "" });
  };

  return (
    <ToggleContainer>
      <ToggleLabel>
        <ToggleInput
          type="checkbox"
          checked={theme?.name === themes.light.name}
          onChange={handleToggle}
        />
        <Slider>
          <SunIcon className="sun-icon" />
          <MoonIcon className="moon-icon" />
        </Slider>
      </ToggleLabel>
    </ToggleContainer>
  );
};

export default ThemeToggle;
