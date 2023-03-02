import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: gold;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className='item'>
          <a
            href='https://www.facebook.com/prabesh.npofficial'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://github.com/pranesh-np/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://instagram.com/entry.d.404/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://twitter.com/entry404/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
