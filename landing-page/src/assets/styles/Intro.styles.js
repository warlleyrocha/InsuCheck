import styled from 'styled-components';

import DetalhePontos from '../images/DetalhePontos.svg';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1512px;
  padding-top: 90px;
  padding-bottom: 200px;
  font-family: 'Urbanist', sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;
  right: 0;

  img {
    padding-right: 260px;
  }

  @media (max-width: 995px) {
    flex-direction: column;
    padding-bottom: 680px;

    img {
      padding-right: 30px;
    }
  }

  @media (max-width: 680px) {
    padding-top: 20px;
    padding-bottom: 120px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 200px;

  @media (max-width: 995px) {
    width: 80%;
  }

  h1 {
    color: #1e272f;
    font-size: 44px;
    font-weight: 700;
    line-height: 60px;
    width: 20ch;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      background-image: url(${DetalhePontos});
      background-repeat: no-repeat;
      background-size: contain;
      width: 270px;
      height: 270px;
      left: -222px;
      top: 55px;
    }
  }

  p {
    color: #1e272fcc;
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    flex-wrap: wrap;
    width: 50ch;

    @media (max-width: 995px) {
      width: 30ch;
    }
  }

  @media (max-width: 420px) {
    padding-left: 30px;

    h1 {
      font-size: 26px;
      line-height: 32px;

      &::before {
        display: none;
      }
    }

    p {
      font-size: 16px;
      line-height: 20px;
      width: 28ch;
      margin-top: 5px;
    }
  }
`;

export const ImageStack = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 274px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const BaseImage = styled.img`
  position: absolute;
  object-fit: contain;
  top: -160px;
  left: -205px;

  @media (max-width: 995px) {
    top: 120px;
    left: 208px;
  }
`;

export const OverlayImage = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 120px;
  z-index: 2;

  @media (max-width: 995px) {
    transform: none;
    left: 260px;
  }
`;

export const BlobDetalhe = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  left: -450px;
  top: -156px;
  z-index: 1;

  @media (max-width: 995px) {
    transform: none;
    left: 700px;
    top: 200px;
  }

  @media (max-width: 680px) {
    display: none;
  }
`;
