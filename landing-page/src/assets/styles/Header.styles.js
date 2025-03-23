import styled from 'styled-components';

export const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
  font-family: 'Urbanist', sans-serif;
`;

export const Container = styled.div`
  font-family: font/family/Body;
  max-width: 1500px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  `;

export const ListaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 16px;

  a {
    color: #333;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      color: #000;
    }
  }
`;

export const Button = styled.button`
  background-color: #fff;
  color: #2f39d3;
  font-weight: 700;
  line-height: 24px;
  font-size: 18px;
  padding: 10px 20px;
  border: 1.5px solid #2f39d3;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2f39d3;
    color: #fff;
  }
`;
