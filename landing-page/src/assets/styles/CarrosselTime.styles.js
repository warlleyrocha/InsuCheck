import styled from 'styled-components';
import fundoAzul from '../images/FundoAzul-Carrossel.png'

export const Fundo = styled.div`
  background-image: url(${fundoAzul});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  margin: 120px 0;

  @media (max-width: 1000px) {
    background-size: cover;
  }
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

  @media (max-width: 768px) {
    padding-top: 60px;
    gap: 8vh;
  }
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
    width: 100%;
    text-align: center;
  }

  @media (max-width: 1000px) {
    p {
      width: 90%;
    }
  }
}
`