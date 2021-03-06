import React, { useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/logo.png'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from "react-scroll";
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <img src={Logo} alt='Logo' width={100} height={60}/>
                        </NavLogo>
                        <MobileIcon onClick={toggle} >
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks 
                                    to="about" 
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                >Covid-19
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="discover"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                >Nouvelles
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to="services"
                                    smooth={true} 
                                    duration={500} 
                                    spy={true} 
                                    exact='true' 
                                    offset={-80}
                                >Services
                                </NavLinks>
                            </NavItem>
                            <NavBtn>
                                <NavBtnLink to='/rendezvous'>Prendre rendez-vous</NavBtnLink>
                            </NavBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
