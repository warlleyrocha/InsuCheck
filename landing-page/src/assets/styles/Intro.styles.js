import styled from 'styled-components';

import DetalhePontos from '../images/DetalhePontos.svg';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1512px;
  padding-top: 90px;
  padding-bottom: 200px;
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    padding-right: 260px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 220px;

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
    line-height: 20px;
    flex-wrap: wrap;
    width: 80ch;
  }
`;
