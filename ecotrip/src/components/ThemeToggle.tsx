import { useContext } from "react";
import { ThemeDispatchContext } from "../contexts/ThemeDispatchContext";
import { ThemeContext } from "styled-components";
import { ThemeActionTypes } from "../reducers/ThemesReducer";
import { themes } from "../models/Theme";
import { FaSun, FaMoon } from "react-icons/fa";

import styled from "styled-components";

const ToggleContainer = styled.div<{
  "aria-label"?: string;
  tabIndex?: number;
}>`
  margin-right: 15px;
  margin-left: auto;
`;

const ToggleLabel = styled.label<{ "aria-label"?: string; tabIndex?: number }>`
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
  border-radius: 50px;
  position: relative;
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  cursor: pointer;

  ${ToggleInput}:checked + & {
    background: ${({ theme }) =>
      theme.name === "Light"
        ? theme.sliderBackgroundColor
        : "linear-gradient(#faf0e1, #faf0e1)"};
  }

  &::before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    left: 4px;
    transition: 0.4s;
    background-color: ${({ theme }) => theme.textContainerBackgroundColor};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(25px);
  }
`;

const SunIcon = styled(FaSun)`
  font-size: 18px;
  color: ${({ theme }) => theme.textContainerBackgroundColor};
`;

const MoonIcon = styled(FaMoon)`
  font-size: 18px;
  color: ${({ theme }) => theme.textContainerBackgroundColor};
`;

const ThemeToggle = () => {
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);

  const handleToggle = () => {
    dispatch({ type: ThemeActionTypes.TOGGLED, payload: "" });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <ToggleContainer>
      <ToggleLabel
        aria-label="Switch between light and dark theme" 
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
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
