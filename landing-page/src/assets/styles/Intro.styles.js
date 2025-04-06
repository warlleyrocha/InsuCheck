import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 120px;
  margin-bottom: 120px;
  font-family: 'Urbanist', sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #1E272F;
    font-size: 44px;
    font-weight: 700;
    line-height: 18.4px;
  }

  p {
    color: #1E272FCC;
    font-size: 20px;
    font-weight: 500;
    line-height: 29.8px;
    flex-wrap: wrap;
    width: 80ch;
    text-align: center;
  }
`;