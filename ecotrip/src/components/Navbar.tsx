import { useState } from "react";
import {
  Nav,
  NavMenu,
  NavItem,
  NavLinkStyled,
  NavLinkStyledTitle,
  HamburgerMenuButton,
  OverlayMenu,
  OverlayMenuItem,
  NavLinkStyledTitleDesktop,
} from "./styled/StyledHeader";
import ThemeToggle from "./ThemeToggle";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
        <Nav>
          <NavMenu>
            {/* <NavLinkStyledTitle to="/" onClick={toggleMenu}>
              EcoTrip
            </NavLinkStyledTitle> */}
            <NavItem>
              <NavLinkStyledTitleDesktop to="/">EcoTrip</NavLinkStyledTitleDesktop>
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
          {menuOpen ? (
            <>
              <span className="line" style={{ transform: "rotate(45deg)", position: "relative", top: "8.5px" }} />
              <span className="line" style={{ opacity: 0 }} />
              <span className="line" style={{ transform: "rotate(-45deg)", position: "relative", top: "-8px" }} />
            </>
          ) : (
            <>
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </>
          )}
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
 
    </>
  );
};
