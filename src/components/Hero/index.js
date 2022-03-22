import React, { useState } from "react";
import Navbar from "../NavBar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroItems,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./Hero.style";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <HeroContent>
          <HeroItems>
            <HeroH1>GREATEST PIZZA EVER</HeroH1>
            <HeroP>READY IN 60 SECONDS</HeroP>
            <HeroBtn>Order Now</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
