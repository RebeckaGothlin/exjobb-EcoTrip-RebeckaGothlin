import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeDispatchContext } from "../contexts/ThemeDispatchContext";
import { themes } from "../models/Theme";
import { ThemeActionTypes } from "../reducers/ThemesReducer";
import {
  HeaderContainer,
  BackgroundImage,
  Nav,
  NavMenu,
  NavItem,
  NavLinkStyled,
  Title,
  Subtitle,
  ArrowDownIcon,
  ArrowDownContainer,
} from "./styled/StyledHeader";
import { NavButton } from "./styled/StyledButtons";

export const Header = () => {
  const dispatch = useContext(ThemeDispatchContext);
  const theme = useContext(ThemeContext);
  const backgroundImageUrl = "../homepic.jpg";
  console.log(backgroundImageUrl);

  const scrollDown = () => {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  };

  return (
    <>
      <HeaderContainer>
        <BackgroundImage backgroundimage={backgroundImageUrl} />
        <Nav>
          <NavMenu>
            <NavItem>
              <NavLinkStyled to="/calculate">Calculate</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/info">Information</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/about">About</NavLinkStyled>
            </NavItem>
            <NavButton
              onClick={() => {
                dispatch({ type: ThemeActionTypes.TOGGLED, payload: "" });
              }}
            >
              <>
                {theme?.name === themes.dark.name
                  ? themes.light.name
                  : themes.dark.name}
              </>
            </NavButton>
          </NavMenu>
        </Nav>
        <Title to="/">EcoTrip</Title>
        <Subtitle>sustainable travel planner</Subtitle>
        <ArrowDownContainer>
          <ArrowDownIcon onClick={scrollDown} />
        </ArrowDownContainer>
      </HeaderContainer>
    </>
  );
};
