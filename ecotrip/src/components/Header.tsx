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
  
  export const Header = () => {
    const backgroundImageUrl = "../homepic.jpg";

    const scrollDown = () => {
      window.scrollBy({
        top: 600,
        behavior: "smooth",
      })
    }
  
    return (
      <>
        <HeaderContainer>
          <BackgroundImage backgroundImage={backgroundImageUrl} />
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
  