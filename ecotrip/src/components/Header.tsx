import { useState } from "react";
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
  NavLinkStyledTitle,
  HamburgerMenuButton,
  OverlayMenu,
  OverlayMenuItem,
} from "./styled/StyledHeader";
import ThemeToggle from "./ThemeToggle";

export const Header = () => {
  const backgroundImageUrl = "../homepic.jpg";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
            {/* <NavLinkStyledTitle to="/" onClick={toggleMenu}>
              EcoTrip
            </NavLinkStyledTitle> */}
            <NavItem>
              <NavLinkStyledTitle to="/">EcoTrip</NavLinkStyledTitle>
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
        <Title to="/">EcoTrip</Title>
        <Subtitle>sustainable travel planner</Subtitle>
        <ArrowDownContainer>
          <ArrowDownIcon onClick={scrollDown} />
        </ArrowDownContainer>
      </HeaderContainer>
    </>
  );
};
