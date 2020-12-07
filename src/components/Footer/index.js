import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import Logo from '../../images/logo.png'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>À propos</FooterLinkTitle>
                            <FooterLink to='/'>Comment ça fonctionne?</FooterLink>
                            <FooterLink to='/'>Témoignages</FooterLink>
                            <FooterLink to='/'>Notre Équipe</FooterLink>
                            <FooterLink to='/'>Conditions d'utilisation</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Nous Joindre</FooterLinkTitle>
                            <FooterLink to='/'>Contact</FooterLink>
                            <FooterLink to='/'>Aide</FooterLink>
                            <FooterLink to='/'>Horaire d'ouverture</FooterLink>
                            <FooterLink to='/'>Carrières</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img src={Logo} alt='Logo' width={100} height={60}/>
                        </SocialLogo>
                        <WebsiteRights>
                            Alma © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.Facebook.com' target='_blank' aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.Instagram.com' target='_blank' aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.Youtube.com' target='_blank' aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//www.Twitter.com' target='_blank' aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.Linkedin.com' target='_blank' aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
