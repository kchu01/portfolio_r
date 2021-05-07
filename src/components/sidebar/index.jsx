import React from 'react'
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements'

export default function Sidebar() {
    return (
        <SidebarContainer>
            <Icon>
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