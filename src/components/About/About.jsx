import React from "react";
import character from "../../assets/char.svg";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <div className='SectionTitle'>About Me</div>
        <div className='BigCard'>
          <Image src={character} alt='Character Hero' />
          <div className='AboutBio'>
            Hello! My name is <strong>Prabesh Thapa.</strong> Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Natus doloribus laborum
            praesentium molestiae explicabo rerum harum magni possimus modi
            cupiditate voluptas, saepe debitis ratione omnis delectus similique
            atque nisi incidunt dignissimos magnam quo quod maxime tenetur.
            Blanditiis, neque modi. Illum, consectetur rerum? Nemo a at
            voluptates architecto odit? Libero perferendis nulla amet deleniti
            necessitatibus numquam.
          </div>
          <div className='AboutBio tagline2'>
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className='tech'>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
