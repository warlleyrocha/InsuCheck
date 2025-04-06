import styled from 'styled-components';

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
  justify-content: space-around;
  width: 100%;

  img {
    padding-right: 260px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 60px;

  h1 {
    color: #1E272F;
    font-size: 44px;
    font-weight: 700;
    line-height: 60px;
    width: 20ch;
  }

  p {
    color: #1E272FCC;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    flex-wrap: wrap;
    width: 80ch;
  }
`;