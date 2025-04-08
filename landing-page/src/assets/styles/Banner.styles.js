import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: rgba(253, 253, 253, 1);
  width: 100%;
  height: auto;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-top: 150px;

  img {
    padding-top: 150px;
  }

  @media (max-width: 995px) {
    flex-direction: column-reverse;
    padding-top: 120px;
    padding-bottom: 80px;

    img {
      width: 540px;
      height: 540px;
      padding-top: 10px;
    }
  }
`;

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  width: 30%;
  padding-top: 128px;
  padding-left: 90px;

  h1 {
    color: rgba(34, 34, 34, 1);
    font-size: 44px;
    font-weight: 600;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: rgba(51, 51, 51, 1);
    font-family: 'Lato', sans-serif;
  }

  @media (max-width: 995px) {
    width: 90%;
    padding-top: 60px;

    p {
      width: 50ch
    }
  }
`;

export const Button = styled.div`
  background-color: #2f39d3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  line-height: 24px;
  font-size: 24px;
  border: 1px solid #2f39d3;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  padding: 16px 28px;
  width: fit-content;

  transition: all 0.2s ease;

  &:hover {
    background-color: #fff;
    color: #2f39d3;
    border-color: #2f39d3;
  }
`;
