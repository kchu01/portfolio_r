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
                    <SidebarLink to="project">
                        project
                    </SidebarLink>
                    <SidebarLink to="about">
                        about
                    </SidebarLink>
                    <SidebarLink to="contact">
                        contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}