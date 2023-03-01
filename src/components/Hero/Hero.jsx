import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import character from "../../assets/char.svg";
import scrollDown from "../../assets/scroll-down.svg";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h3>hello, everynyan!</h3>
            <h1>
              I'm <span className='name'>Prabesh Thapa.</span>
            </h1>
            <h5>Frontend Developer</h5>
            <p>Just an introvert trying to code beautiful things.</p>
          </HeroLeft>
          <HeroRight>
            <Image src={character} alt='Character hero' />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to='projects'>
          <ScrollLink>
            Scroll Down
            <img src={scrollDown} alt='scroll-down' />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
