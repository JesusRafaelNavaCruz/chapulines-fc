"use client";

import { BiMenu } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import {
  IconLogo,
  NavbarContainer,
  NavbarWrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  ToggleMenu,
} from "./Navbar.element";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <IconLogo>Chapulines F.C.</IconLogo>

        <ToggleMenu onClick={() => setToggleMenu(!toggleMenu)}>
          {!toggleMenu ? (<BiMenu />) : (<LiaTimesSolid />)}
        </ToggleMenu>

        <Menu click={toggleMenu}>
          <MenuItem>
            <MenuItemLink href="/">Inicio</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/notices">Noticias</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="/team">Equipo</MenuItemLink>
          </MenuItem>
        </Menu>
      </NavbarWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
