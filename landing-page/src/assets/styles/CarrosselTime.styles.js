import styled from 'styled-components';
import fundoAzul from '../images/FundoAzul-Carrossel.png'

export const Fundo = styled.div`
  background-image: url(${fundoAzul});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;