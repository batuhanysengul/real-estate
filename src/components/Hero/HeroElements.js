import styled, { css } from "styled-components/macro";
import {
  FaArrowRight,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";

export const HeroSection = styled.div`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 5%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;
export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover; //aspect ratioyu sabit tutmak için
`;

export const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    width: calc(100% - 200px);
    color: white;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem); //1-smallest 2-responsive 3-biggest
        font-weight: 600;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
        text-align: left;
        margin-bottom: 0.8rem;
    }

    p{
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    }
`;

export const Arrow = styled(FaArrowRight)`
  margin-left: 0.5rem;
`;

const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;

export const LeftArrow = styled(FaArrowCircleLeft)`
  ${ArrowButtons}
`;

export const RightArrow = styled(FaArrowCircleRight)`
  ${ArrowButtons}
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;
