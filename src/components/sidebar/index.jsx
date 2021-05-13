import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink
} from './SidebarElements'

export default function Sidebar({ isOpen, toggle }) {
    return (

        <SidebarContainer isOpen={isOpen} onClick={toggle}>

            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>

                <SidebarMenu>
                    <SidebarLink to="project" onClick={toggle}>
                        project
                    </SidebarLink>

                    <SidebarLink to="about" onClick={toggle}>
                        about
                    </SidebarLink>

                    <SidebarLink to="contact" onClick={toggle}>
                        contact
                    </SidebarLink>

                </SidebarMenu>

            </SidebarWrapper>
        </SidebarContainer>
    )
}