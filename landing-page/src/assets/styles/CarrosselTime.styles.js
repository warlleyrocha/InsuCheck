import styled from 'styled-components';
import fundoAzul from '../images/FundoAzul-Carrossel.png'

export const Fundo = styled.div`
  background-image: url(${fundoAzul});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100vw;
  height: 746px;
  margin-top: 120px;
  margin-bottom: 120px;
`;

export const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 12vh;
`;

export const Text = styled.div`
  color: rgba(253, 253, 253, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 44px;
    font-weight: 700;
    line-height: 18.4px;
  };

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 29.8px;
    flex-wrap: wrap;
    width: 100ch;
    text-align: center;
  }
`