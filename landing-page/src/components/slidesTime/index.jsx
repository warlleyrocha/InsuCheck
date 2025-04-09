import React, { useState } from "react";
import { SCarouselWrapper, SSlidesArea, SSlidesContainer, SPagination, SButton } from "../../assets/styles/Index.styles";
import Slide from "./Slide";
import LeftArrowIcon from "../LeftArrow";
import RightArrowIcon from "../RightArrow";

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
