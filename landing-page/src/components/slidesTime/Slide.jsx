import React from "react";
import { SlideContainer, TopSection, Image, Info, Name, Role, Description } from "../../assets/styles/Slide.styles";

const Slide = ({ image, name, role, description }) => {
  return (
    <SlideContainer>
      <TopSection>
        <Image src={image} alt={name} />
        <Info>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </Info>
      </TopSection>
      <Description>{description}</Description>
    </SlideContainer>
  );
};

export default Slide;
