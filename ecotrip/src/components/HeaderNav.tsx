// import { NavLink } from "react-router-dom";
// import {
//   Navbar,
//   NavLinks,
//   NavLinkItem,
//   ThemeToggleWrapper,
//   HamburgerMenu,
//   OpenNav,
//   OpenNavItem,
//   NavLinkDesktop,
//   NavLink2,
//   NavLinkEcoTrip,
// } from "./styled/StyledNav";
// import ThemeToggle from "./ThemeToggle";
// import { useState } from "react";

// export const HeaderNav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <Navbar>
//       <NavLinkDesktop to="/">EcoTrip</NavLinkDesktop>
//       <NavLinks>
//         <NavLinkItem>
//           <NavLink2 to="/calculate">Calculate</NavLink2>
//         </NavLinkItem>
//         <NavLinkItem>
//           <NavLink2 to="/info">Information</NavLink2>
//         </NavLinkItem>
//         <NavLinkItem>
//           <NavLink2 to="/about">About</NavLink2>
//         </NavLinkItem>
//       </NavLinks>
//       <HamburgerMenu onClick={toggleMenu}>
//         <span />
//         <span />
//         <span />
//       </HamburgerMenu>
//       <NavLinkEcoTrip to="/">EcoTrip</NavLinkEcoTrip>

//       <ThemeToggleWrapper>
//         <ThemeToggle />
//       </ThemeToggleWrapper>

//       {menuOpen && (
//         <OpenNav>
//           <OpenNavItem>
//             <NavLink to="/calculate" onClick={closeMenu}>
//               Calculate
//             </NavLink>
//           </OpenNavItem>
//           <OpenNavItem>
//             <NavLink to="/info" onClick={closeMenu}>
//               Information
//             </NavLink>
//           </OpenNavItem>
//           <OpenNavItem>
//             <NavLink to="/about" onClick={closeMenu}>
//               About
//             </NavLink>
//           </OpenNavItem>
//         </OpenNav>
//       )}
//     </Navbar>
//   );
// };

// export default HeaderNav;
