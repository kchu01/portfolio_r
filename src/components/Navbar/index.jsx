import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'

export default function Navbar() {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        chukathy
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" >
                                home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects" >
                                projects
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" >
                                about
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact" >
                                contact
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                </NavbarContainer>
            </Nav>
        </>
    )
}
