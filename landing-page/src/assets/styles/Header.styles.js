import styled from 'styled-components';

export const GlobalStyle = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
  font-family: 'Urbanist', sans-serif;
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(77, 77, 77, 0.2);
  padding-right: 158px;
  padding-left: 158px;
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
  font-size: 13px;

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
  font-size: 14px;
  border: 1.5px solid #2f39d3;
  border-radius: 8px;
  cursor: pointer;
  padding-top: 10px;
  padding-right: 22px;
  padding-bottom: 10px;
  padding-left: 22px;

  &:hover {
    background-color: #2f39d3;
    color: #fff;
  }
`;
