import styled, { createGlobalStyle } from "styled-components";
import { NavLink } from "react-router-dom";

export const GlobalKeyframes = createGlobalStyle`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HeaderContainer = styled.header`
  position: relative;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Abril Fatface", serif;
  gap: 0;
  overflow: hidden;
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
  will-change: opacity;
  
  @media (max-width: 768px) {
    background-position: 80% center;
  }
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
  animation: fadeIn 0.8s ease-out forwards;

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

  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavLinkStyledTitleDesktop = styled(NavLink)`
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

  @media (max-width: 767px) {
    display: none;
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
    animation: fadeIn 1s ease-out forwards;

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
  display: none;

  @media (max-width: 768px) {
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
    gap: 60px;
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

export const Title = styled.p`
  color: ${({ theme }) => theme.textContainerTextColor};
  margin-top: -20px;
  animation: fadeIn 1s ease-out forwards;
`;

export const UnderTitleMobile = styled.p`
  color: ${({ theme }) => theme.textContainerTextColor};
  font-weight: 500;
  font-size: 1.4rem;
  margin-top: -10px;
  animation: fadeIn 1s ease-out forwards;
`;

export const UnderTitleDesktop = styled.p`
  color: ${({ theme }) => theme.textContainerTextColor};
  font-weight: 500;
  font-size: 3rem;
  margin-top: -20px;
  animation: fadeIn 1s ease-out forwards;
`;

export const SubtitleMobile = styled.section`
  font-size: 1rem;
  font-family: "Poppins";
  color: white;
  text-align: left;
  position: absolute;
  width: 100%;
  top: 10px;
  line-height: 1.2rem;
  z-index: 1;
  white-space: normal;
  margin-left: 15px;
  margin-top: 20px;
  animation: fadeIn 1s ease-out forwards;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    margin-bottom: 10px;
    animation: fadeIn 1s ease-out forwards;
  }
`;

export const SubtitleDesktop = styled.section`
  font-size: 1.6rem;
  font-family: "Poppins";
  color: white;
  text-align: left;
  position: absolute;
  width: 100%;
  top: 10px;
  line-height: 2rem;
  z-index: 1;
  white-space: normal;
  margin-left: 20px;
  margin-top: 15px;
  animation: fadeIn 1s ease-out forwards;

  @media (max-width: 768px) {
    display: none;
  }

  span {
    display: block;
    margin-top: -20px;
    margin-bottom: 10px;
    animation: fadeIn 1s ease-out forwards;
  }
`;

export const CustomShapeDivider = styled.div`
  position: absolute;
  top: 63px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  color: ${({ theme }) => theme.textContainerTextColor};
  animation: fadeIn 0.8s ease-out forwards;

  svg {
    position: relative;
    display: block;
    width: calc(263% + 1.3px);
    height: 330px;
    transform: rotateY(180deg);
    fill: ${({ theme }) => theme.navBackgroundColor};
  }

  span {
    top: 10%;
    left: 0;
    color: ${({ theme }) => theme.textContainerTextColor};
    font-family: "Poppins", sans-serif;
    text-align: left;
    z-index: 1;
    max-width: 45%;
  }

  @media (min-width: 768px) {
    top: 68px;
    svg {
      width: calc(244% + 1.3px);
      height: 520px;
    }
  }

  @media (min-width: 1024px) {
    top: 72px;
    svg {
      width: calc(223% + 1.3px);
      height: 459px;
    }
  }
`;

export const Line = styled.span`
  display: block;
  height: 3px;
  width: 25px;
  background-color: #000;
  transition: all 0.3s ease;
`;

export const RotatedLineTop = styled(Line)`
  transform: rotate(45deg);
  position: relative;
  top: 8.5px;
`;

export const RotatedLineBottom = styled(Line)`
  transform: rotate(-45deg);
  position: relative;
  top: -8px;
`;

export const HiddenLine = styled(Line)`
  opacity: 0;
`;
