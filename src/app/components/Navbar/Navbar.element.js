import Link from "next/link";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #222831;
`;

export const NavbarWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    padding: 0 1rem;    
  }
`;

export const IconLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.2rem;
  color: #00adb5;
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => click ? 0 : '-100%'};
    flex-direction: column;
    transition: 0.5s all ease-in;
    background-color: #222831;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  &:hover {
    background-color: #454e59;
    border-bottom: 0.3rem solid #00adb5;
    transition: 0.4s ease-in;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    height: 50px;
    &:hover {
      background-color: #454e59;
      border-bottom: none;
      transition: 0.4s ease-in;
      border-radius: 10 px;
    }
  }
`;

export const MenuItemLink = styled(Link)`
  color: #00adb5;
  text-decoration: none;
`;

export const ToggleMenu = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    color: #00adb5;
    font-size: 1.2rem;
  }
`;
