import styled from 'styled-components';
import fundoAzul from '../images/FundoAzul-Carrossel.png'

export const Fundo = styled.div`
  background-image: url(${fundoAzul});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 1512px;
  height: 694px;
  margin: 0 auto;
  margin-top: 120px;
  margin-bottom: 120px;
`;

export const Container = styled.div`
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Text = styled.div`
  color: rgba(253, 253, 253, 1);

  h1 {
    font-size: 44px;
    font-weight: 700;
    line-height: 48.4px;
  }
`