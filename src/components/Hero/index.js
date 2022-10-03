import React, { useState, useRef, useEffect } from "react";
import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  SliderButtons,
  RightArrow,
  LeftArrow,
} from "./HeroElements";
import { Button } from "../Button";
import { css } from "styled-components/macro";

function Hero({ slides }) {
  //slider
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //oto slider
  useEffect(() =>{
    const nextSlide = () => {
        setCurrent(current => (current === length -1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 3000)
    return function () {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }

  }, [current, length])

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary="true"
                      css={`
                        max-width: 150px;
                      `}
                    >
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <LeftArrow onClick={prevSlide} />
          <RightArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
}

export default Hero;
