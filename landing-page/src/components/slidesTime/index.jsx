import React, { useState } from "react";
import styled from "styled-components";
import Slide from "./Slide"; // Importando o novo componente

const SCarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SSlidesContainer = styled.div`
  display: flex;
  overflow: visible;
  width: 100%;
  justify-content: center;
  gap: 20px;
   flex-shrink: 0;
`;

const SButtonsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const SPagination = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background: gray;
    cursor: pointer;
  }
  .active {
    background: blue;
  }
`;

const Carousel = ({ slides, slidesPerPage }) => {
  const totalPages = Math.ceil(slides.length / slidesPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * slidesPerPage;
  const visibleSlides = slides.slice(startIndex, startIndex + slidesPerPage);

  return (
    <SCarouselWrapper>
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

      <SButtonsContainer>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>
          ◀ Anterior
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))
          }
        >
          Próximo ▶
        </button>
      </SButtonsContainer>

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
