import React, { useState } from "react";
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleMenu();
    }
  }

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
              <NavLinkStyledTitleDesktop to="/" aria-label="Go to EcoTrip homepage">EcoTrip</NavLinkStyledTitleDesktop>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/calculate" aria-label="Go to the Calculate page">Calculate</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/info" aria-label="Learn more about eco-friendly travel">Information</NavLinkStyled>
            </NavItem>
            <NavItem>
              <NavLinkStyled to="/about" aria-label="About EcoTrip">About</NavLinkStyled>
            </NavItem>
            <NavItem className="last-item">{/* <ThemeToggle /> */}</NavItem>
          </NavMenu>
          <HamburgerMenuButton             role="button"
            onClick={toggleMenu}
            onKeyDown={handleKeyDown}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            tabIndex={0}>
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
              <NavLinkStyledTitle to="/" aria-label="Go to EcoTrip homepage">EcoTrip</NavLinkStyledTitle>
            </NavItem>
          <ThemeToggle />
          {menuOpen && (
            <OverlayMenu>
              <OverlayMenuItem></OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled to="/calculate" onClick={toggleMenu} aria-label="Go to the Calculate page">
                  Calculate
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled to="/info" onClick={toggleMenu} aria-label="Learn more about eco-friendly travel">
                  Information
                </NavLinkStyled>
              </OverlayMenuItem>
              <OverlayMenuItem>
                <NavLinkStyled to="/about" onClick={toggleMenu} aria-label="About EcoTrip">
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
