import React from "react";
import {
  FooterContainer,
  FooterTıtle,
  FooterIconWrap,
  FooterLink,
  
} from "./Footer.style";

import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from "react-icons/fa"
const Footer = () => {
  return (
    <FooterContainer>
      <FooterTıtle>Pizza</FooterTıtle>
      <FooterIconWrap>
        <FooterLink to="/">
          <FaFacebook/>
        </FooterLink>
        <FooterLink to="/">
          <FaInstagram/>
        </FooterLink>
        <FooterLink to="/">
          <FaTwitter/>
        </FooterLink>
        <FooterLink to="/">
          <FaLinkedin/>
        </FooterLink>
      </FooterIconWrap>
    </FooterContainer>
  );
};

export default Footer;
