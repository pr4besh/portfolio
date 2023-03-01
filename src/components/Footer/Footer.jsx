import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  background-image: url(./src/assets/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;

  span {
    font-size: 1.2rem;
    position: absolute;
    bottom: 3rem;
    left: 5rem;
    color: #fff;
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className='Container'>
        <span>Nothing Happened! 💚</span>
      </div>
    </FooterSection>
  );
}

export default Footer;
