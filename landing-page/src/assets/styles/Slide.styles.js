import styled from "styled-components";

export const SlideContainer = styled.div`
  width: 350px;
  height: 200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  flex-shrink: 0;

  scroll-snap-align: start;


  @media (max-width: 768px) {
    width: 50vh;
    height: auto;
    padding: 16px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  align-items: flex-start; 
  gap: 10px;
`;

export const Image = styled.img`
  border-radius: 50%;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.h3`
  color: #0F0F0F;
  font-family: 'Urbanist', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

export const Role = styled.p`
  color: #464646;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

export const Description = styled.p`
  color: #464646;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  padding: 0px 20px;
`;