import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

export const HeaderContainer = styled.header`
  position: relative;
  text-align: center;
  height: 500px;
  width: 100vw; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Abril Fatface', serif; 
  gap: 0;
`;

export const BackgroundImage = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
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
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  padding: 15px 0;
  z-index: 10;
  font-family: 'Abril Fatface', serif; 
`;

export const NavMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 10px;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    right: -10px; 
    top: 50%;
    transform: translateY(-50%);
    height: 20px; 
    width: 2px;
    background-color: white;
    @media (min-width: 768px) {
      right: -40px;
    }

    @media (min-width: 1024px) {
      right: -90px;
    }
  }

  @media (min-width: 768px) {
    margin: 0 40px;
  }

  @media (min-width: 1024px) {
    margin: 0 90px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

export const Title = styled(NavLink)`
  font-size: 7rem;
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
  transform: translateX(-20px);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ArrowDownContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`

export const ArrowDownIcon = styled(FaArrowDown)`
  color: white;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(0.2rem);
    transition: transition 0.2s;
  }
`;
