import { useState } from "react";
import {
  HeaderContainer,
  BackgroundImage,
  Nav,
  NavMenu,
  NavItem,
  NavLinkStyled,
  // ArrowDownIcon,
  // ArrowDownContainer,
  NavLinkStyledTitle,
  HamburgerMenuButton,
  OverlayMenu,
  OverlayMenuItem,
  NavLinkStyledTitleDesktop,
  SubtitleDesktop,
  SubtitleMobile,
  CustomShapeDivider,
  // Title,
  UnderTitleMobile,
  UnderTitleDesktop,
  Title,
  HiddenLine,
  Line,
  RotatedLineBottom,
  RotatedLineTop,
} from "./styled/StyledHeader";
import ThemeToggle from "./ThemeToggle";
import { LinkButton } from "./styled/StyledButtons";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const backgroundImageUrl = "../headerpic-smaller.jpg";
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const scrollDown = () => {
  //   window.scrollBy({
  //     top: 600,
  //     behavior: "smooth",
  //   });
  // };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key == " ") {
      toggleMenu();
    }
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
              <NavLinkStyledTitleDesktop
                to="/"
                aria-label="Go to EcoTrip homepage"
              >
                EcoTrip
              </NavLinkStyledTitleDesktop>
            </NavItem>
            <NavItem>
              <NavLinkStyled
                to="/calculate"
                aria-label="Go to the Calculate page"
              >
                Calculate
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled
                to="/info"
                aria-label="Learn more about eco-friendly travel"
              >
                Information
              </NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/faq" aria-label="Frequently asked questions">
                FAQ
              </NavLinkStyled>
            </NavItem>
            {/* <NavItem>
              <NavLinkStyled to="/about" aria-label="About EcoTrip">
                About
              </NavLinkStyled>
            </NavItem> */}
            <NavItem className="last-item">{/* <ThemeToggle /> */}</NavItem>
          </NavMenu>
          <HamburgerMenuButton
            role="button"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            tabIndex={0}
          >
            {menuOpen ? (
              <>
                <RotatedLineTop />
                <HiddenLine />
                <RotatedLineBottom />
              </>
            ) : (
              <>
                <Line />
                <Line />
                <Line />
              </>
            )}
          </HamburgerMenuButton>

          <NavItem>
            <NavLinkStyledTitle to="/" aria-label="Go to EcoTrip homepage">
              EcoTrip
            </NavLinkStyledTitle>
          </NavItem>
          <ThemeToggle aria-label="Switch theme" />
          {menuOpen && (
            <OverlayMenu>
              <OverlayMenuItem></OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled
                  to="/calculate"
                  onClick={toggleMenu}
                  aria-label="Go to the Calculate page"
                  tabIndex={1}
                >
                  Calculate
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled
                  to="/info"
                  onClick={toggleMenu}
                  aria-label="Learn more about eco-friendly travel"
                  tabIndex={1}
                >
                  Information
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled
                  to="/faq"
                  onClick={toggleMenu}
                  aria-label="Frequently asked questions"
                >
                  FAQ
                </NavLinkStyled>
              </OverlayMenuItem>
              {/* <OverlayMenuItem>
                <NavLinkStyled
                  to="/about"
                  onClick={toggleMenu}
                  aria-label="About EcoTrip"
                >
                  About
                </NavLinkStyled>
              </OverlayMenuItem> */}
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
            {/* <Title>EcoTrip</Title> */}
            <Title>EcoTrip is your</Title>
            <UnderTitleMobile>sustainable travel planner.</UnderTitleMobile>
            <span>
              With EcoTrip, you can compare emissions to make eco-friendly
              travel choices.
            </span>
            <LinkButton
              onClick={navigateToCalculate}
              aria-label="Calculate your carbon emissions for different travel options"
            >
              Calculate
            </LinkButton>
          </SubtitleMobile>
          <SubtitleDesktop>
            <Title>EcoTrip is your</Title>
            <UnderTitleDesktop>sustainable travel planner.</UnderTitleDesktop>
            <span>
              Traveling impacts the environment through carbon emissions, but
              with EcoTrip, you can compare emissions from flights, cars, and
              trains to make eco-friendly travel choices.
            </span>
            <LinkButton
              onClick={navigateToCalculate}
              aria-label="Calculate your carbon emissions for different travel options"
            >
              Calculate
            </LinkButton>
          </SubtitleDesktop>
        </CustomShapeDivider>

        {/* <ArrowDownContainer>
          <ArrowDownIcon onClick={scrollDown} />
        </ArrowDownContainer> */}
      </HeaderContainer>
    </>
  );
};
