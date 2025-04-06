import styled from 'styled-components';

export const UrbanistFont = styled.div`
  font-family: 'Urbanist', sans-serif;
`;

export const LatoFont = styled.div`
  font-family: 'Lato', sans-serif;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Urbanist', sans-serif;
  padding-top: 0;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid rgba(77, 77, 77, 0.2);
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 220px;
  padding: 30px 20px;
`;

export const ListaHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 23px;

  a {
    color: #333;
    text-decoration: none;
    margin: 0 15px;

    &:hover {
      color: #000;
      padding-bottom: 3px;
      border-bottom: 2px solid #000;
      transition: all 0.2s ease;
    }
  }
`;

export const Button = styled.button`
  background-color: #fff;
  color: #2f39d3;
  font-weight: 700;
  line-height: 24px;
  font-size: 24px;
  border: 1.5px solid #2f39d3;
  border-radius: 8px;
  cursor: pointer;
  padding: 14px 24px;

  transition: all 0.2s ease;

  &:hover {
    background-color: #2f39d3;
    color: #fff;
  }
`;
