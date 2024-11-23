import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 10px; /* Standard gap för små skärmar */

  @media (min-width: 768px) {
    gap: 20px; /* För tablets */
  }

  @media (min-width: 1024px) {
    gap: 30px; /* För desktops */
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


export const NavLinkItem = styled.li`
  margin: 10px 10px; /* Standardavstånd */

  @media (min-width: 768px) {
    margin: 10px 20px; /* Avstånd för tablets */
  }

  @media (min-width: 1024px) {
    margin: 10px 30px; /* Avstånd för desktops */
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.navTextColor};
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.activeNavTextColor};
    }

    &.active {
      font-weight: bold;
      text-decoration: underline;
      color: ${({ theme }) => theme.activeNavTextColor};
    }
  }
`;


export const NavLinkDesktop = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.navTextColor};
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: "Abril Fatface", serif;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 20px;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    color: ${({ theme }) => theme.activeNavTextColor};
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: ${({ theme }) => theme.activeNavTextColor};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinkEcoTrip = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.navTextColor};
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.3s ease;
  font-family: "Abril Fatface", serif;

  &:hover {
    color: ${({ theme }) => theme.activeNavTextColor};
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: ${({ theme }) => theme.activeNavTextColor};
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLink2 = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.navTextColor};
  font-size: 1rem;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.activeNavTextColor};
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    color: ${({ theme }) => theme.activeNavTextColor};
  }
`;

export const ThemeToggleWrapper = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    cursor: pointer;
    z-index: 20;
    margin-right: 10px;

    span {
      width: 100%;
      height: 3px;
      background-color: ${({ theme }) => theme.navTextColor};
      border-radius: 2px;
      transition: all 0.3s;
    }
  }
`;

export const OpenNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 15;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const OpenNavItem = styled.div`
  font-size: 1.5rem;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.navTextColor};
    text-decoration: none;

    &:active {
      color: ${({ theme }) => theme.navTextColor};
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
