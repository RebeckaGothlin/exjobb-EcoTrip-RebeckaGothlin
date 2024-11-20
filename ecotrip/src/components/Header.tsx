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
} from "./styled/StyledHeader";
import ThemeToggle from "./ThemeToggle";

export const Header = () => {
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
            <NavItem className="last-item">
              <ThemeToggle />
            </NavItem>
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
