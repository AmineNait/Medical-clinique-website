import React from 'react'
import {
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SidebarBtnWrap, 
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        Covid-19
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Nouvelles
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarBtnWrap>
                        <SidebarRoute to="./rendezvous">Prendre Rendez-vous</SidebarRoute>
                    </SidebarBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
