import React, { useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import LeftArrowIcon from "../LeftArrow";
import RightArrowIcon from "../RightArrow";

const SCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SSlidesArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SSlidesContainer = styled.div`
  display: flex;
  overflow: visible;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 0 60px; // espaço para os botões
`;

const SButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 2px 7px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 2;

  ${({ left }) => left && `
    left: -70px;
  `}

  ${({ right }) => right && `
    right: -70px;
  `}

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 12px;
  }
`;

const SPagination = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  gap: 8px;

  button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: none;
    background: #C4D8FF;
    cursor: pointer;

    &.active {
      background: #2F39D3;
    }
  }
`;

const Carousel = ({ slides, slidesPerPage }) => {
  const totalPages = Math.ceil(slides.length / slidesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * slidesPerPage;
  const visibleSlides = slides.slice(startIndex, startIndex + slidesPerPage);

  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const goToNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <SCarouselWrapper>
      <SSlidesArea>
      <SButton left onClick={goToPrev}>
        <LeftArrowIcon />
      </SButton>

        <SSlidesContainer>
          {visibleSlides.map((member, index) => (
            <Slide
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </SSlidesContainer>
      <SButton right onClick={goToNext}>
        <RightArrowIcon />
      </SButton>
        
      </SSlidesArea>

      <SPagination>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={index === currentPage ? "active" : ""}
            onClick={() => setCurrentPage(index)}
          ></button>
        ))}
      </SPagination>
    </SCarouselWrapper>
  );
};

export default Carousel;
