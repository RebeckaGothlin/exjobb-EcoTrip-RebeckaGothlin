import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

export const HeaderContainer = styled.header`
  position: relative;
  text-align: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Abril Fatface", serif;
  gap: 0;
`;

export const BackgroundImage = styled.div<{ backgroundimage: string }>`
  background-image: url(${(props) => props.backgroundimage});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.navBackgroundColor};
  color: ${({ theme }) => theme.navTextColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  font-family: "Poppins", serif;

  @media (max-width: 768px) {
    justify-content: flex-end;
    padding: 12px 30px;
  }

  @media (min-width: 768px) {
    padding: 12px 0;
    justify-content: center; 
  }
  @media (min-width: 1024px) {
    padding: 14px 0;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 10px;

  &.last-item {
    margin-left: auto;
    margin-right: 30px;
  }

  @media (min-width: 768px) {
    margin: 10px 20px;
  }

  @media (min-width: 1024px) {
    margin: 10px 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.navTextColor};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 3px;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.navTextColor};
  }

  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 1.5px;
    color: ${({ theme }) => theme.navTextColor};
  }
`;

export const NavLinkStyledTitle = styled(NavLink)`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.navTextColor};
  text-decoration: none;
  margin-bottom: 0;
  line-height: 0.8;
  font-family: "Abril Fatface", serif;
  margin-bottom: 4px;
  margin-right: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.navTextColor}; 
  }
`;

export const HamburgerMenuButton = styled.div`
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

export const OverlayMenu = styled.div`
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

export const OverlayMenuItem = styled.div`
  font-size: 1.5rem;
  font-weight: 500;

  a {
    color: ${({ theme }) => theme.navTextColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;



export const Title = styled(NavLink)`
  font-size: 6rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin-bottom: 0;
  line-height: 0.8;

  &:hover {
    text-decoration: underline;
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 10rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  color: white;
  margin-top: 0;
  transform: translateX(-26px);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ArrowDownContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const ArrowDownIcon = styled(FaArrowDown)`
  color: white;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(0.2rem);
    transition: transition 0.2s;
  }
`;
