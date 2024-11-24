import { useState } from "react";
import {
  HeaderContainer,
  BackgroundImage,
  Nav,
  NavMenu,
  NavItem,
  NavLinkStyled,
  ArrowDownIcon,
  ArrowDownContainer,
  NavLinkStyledTitle,
  HamburgerMenuButton,
  OverlayMenu,
  OverlayMenuItem,
  NavLinkStyledTitleDesktop,
  SubtitleDesktop,
  SubtitleMobile,
} from "./styled/StyledHeader";
import ThemeToggle from "./ThemeToggle";
import { NavButton } from "./styled/StyledButtons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const backgroundImageUrl = "../planeticon.jpg";
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollDown = () => {
    window.scrollBy({
      top: 600,
      behavior: "smooth",
    });
  };

  const navigateToCalculate = () => {
    navigate('/calculate');
  };

  return (
    <>
      <HeaderContainer>
        <BackgroundImage backgroundimage={backgroundImageUrl} />
        <Nav>
          <NavMenu>
            {/* <NavLinkStyledTitle to="/" onClick={toggleMenu}>
              EcoTrip
            </NavLinkStyledTitle> */}
            <NavItem>
              <NavLinkStyledTitleDesktop to="/">
                EcoTrip
              </NavLinkStyledTitleDesktop>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/calculate">Calculate</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/info">Information</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/about">About</NavLinkStyled>
            </NavItem>
            <NavItem className="last-item">{/* <ThemeToggle /> */}</NavItem>
          </NavMenu>
          <HamburgerMenuButton onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </HamburgerMenuButton>
          <NavItem>
            <NavLinkStyledTitle to="/">EcoTrip</NavLinkStyledTitle>
          </NavItem>
          <ThemeToggle />
          {menuOpen && (
            <OverlayMenu>
              <OverlayMenuItem></OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled to="/calculate" onClick={toggleMenu}>
                  Calculate
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled to="/info" onClick={toggleMenu}>
                  Information
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled to="/about" onClick={toggleMenu}>
                  About
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem></OverlayMenuItem>
            </OverlayMenu>
          )}
        </Nav>
        {/* <Title to="/">EcoTrip</Title> */}
        <SubtitleMobile>
        <span>Traveling impacts the environment through</span>
        <span>carbon emissions, but with EcoTrip,</span>
        <span>you can compare emissions</span>
        <span>from flights, cars, and</span>
        <span>trains to make eco-</span>
        <span>friendly travel</span>
        <span>choices.</span>
        <NavButton onClick={navigateToCalculate}>Calculate</NavButton>
        </SubtitleMobile>

        <SubtitleDesktop>
        <span>Traveling impacts the environment</span>
        <span>through carbon emissions,</span>
        <span>but with EcoTrip, you can</span>
        <span>compare emissions from</span>
        <span> flights, cars, and</span>
        <span>trains to make eco-</span>
        <span>friendly travel</span>
        <span>choices.</span>
        <NavButton onClick={navigateToCalculate}>Calculate</NavButton>
        </SubtitleDesktop>

        <ArrowDownContainer>
          <ArrowDownIcon onClick={scrollDown} />
        </ArrowDownContainer>
      </HeaderContainer>
    </>
  );
};
