import React from 'react'
import { menuData } from '../../data/MenuData'
import { Button } from '../Button'
import { Nav, Logo, MenuBars, NavMenuLinks, NavBtn, NavMenu } from './NavbarElements'

function Navbar({toggle}) {
  return (
    <Nav>
        <Logo to='/'>LOGO</Logo>
        <MenuBars onClick={toggle}/>
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