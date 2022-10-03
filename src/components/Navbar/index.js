import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button'
import { Nav, Logo, MenuBars, NavMenuLinks, NavBtn, NavMenu } from './NavbarElements'

function Navbar() {
  return (
    <Nav>
        <Logo to='/'>LOGO</Logo>
        <MenuBars />
        <NavMenu>
            {menuData.map((item, index) => (
                <NavMenuLinks to={item.link} key={index}>
                    {item.title}
                </NavMenuLinks>
            ))}
        </NavMenu>
        <NavBtn>
            <Button to='/contact' primary='true'>Contact</Button>
        </NavBtn>
    </Nav>
  )
}

export default Navbar