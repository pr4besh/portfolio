import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    padding: 1rem;
    max-width: 720px;
  }

  @media (min-width: 992px) {
    padding: 1.2rem;
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    padding: 1.2rem;
    max-width: 1000px;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 1.8rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1rem;
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 992px) {
    h3 {
      font-size: 2rem;
    }
  }

  h5 {
    font-size: 1rem;
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  @media (min-width: 576px) {
    h5 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 992px) {
    h5 {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1rem;
    padding: 0 8px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media (min-width: 992px) {
    p {
      font-size: 1.2rem;
      padding: 0;
    }
  }

  .name {
    color: gold;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  width: auto;

  @media (min-width: 576px) {
    height: 400px;
  }

  @media (min-width: 992px) {
    height: 400px;
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
