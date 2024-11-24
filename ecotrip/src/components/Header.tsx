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
  CustomShapeDivider,
} from "./styled/StyledHeader";
import ThemeToggle from "./ThemeToggle";
import { LinkButton } from "./styled/StyledButtons";
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
    navigate("/calculate");
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
        <CustomShapeDivider>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
          <SubtitleMobile>
            <span>
              Traveling impacts the environment through carbon emissions, but
              with EcoTrip, you can compare emissions from flights, cars, and
              trains to make eco-friendly travel choices.
            </span>
            <LinkButton onClick={navigateToCalculate}>Calculate</LinkButton>
          </SubtitleMobile>
          <SubtitleDesktop>
            <span>
              Traveling impacts the environment through carbon emissions, but
              with EcoTrip, you can compare emissions from flights, cars, and
              trains to make eco-friendly travel choices.
            </span>
            <LinkButton onClick={navigateToCalculate}>Calculate</LinkButton>
          </SubtitleDesktop>
        </CustomShapeDivider>

        <ArrowDownContainer>
          <ArrowDownIcon onClick={scrollDown} />
        </ArrowDownContainer>
      </HeaderContainer>
    </>
  );
};
