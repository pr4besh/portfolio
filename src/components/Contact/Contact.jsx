import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id='contact'>
      <div className='Container'>
        <div className='SectionTitle'>Get In Touch</div>
        <div className='BigCard'>
          <Email>
            <span>this.prabesh@gmail.com</span>
            <a
              className='btn PrimaryBtn'
              href='mailto:this.prabesh@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
