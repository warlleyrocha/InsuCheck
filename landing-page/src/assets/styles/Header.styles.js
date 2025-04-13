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

  @media (max-width: 420px) {
    max-width: 380px;
    position: normal;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;

  @media (max-width: 995px) {
    gap: 1px;
    padding: 15px 8px;
  }

  @media (max-width: 420px) {
    max-width: 380px;
    gap: 1px;
    padding: 8px 3px;

    img {
      width: 90px;
    }
  }
`;

export const ListaHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: 23px;
  gap: 10px;
  margin-left: 130px;
  margin-right: 130px;

  @media (max-width: 995px) {
    font-size: 20px;
    gap: 8px;
    margin-left: 40px;
    margin-right: 40px;
  }

  a {
    color: #333;
    text-decoration: none;
    margin: 0 8px;

    &:hover {
      color: #000;
      padding-bottom: 3px;
      border-bottom: 2px solid #000;
      transition: all 0.2s ease;
    }
  }

  @media (max-width: 420px) {
    gap: 0px;
    font-size: 14px;
    margin-left: 20px;
    margin-right: 20px;

    a {
      margin: 0 6px;
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

  @media (max-width: 995px) {
    font-size: 18px;
    margin-left: 38px;
    margin-right: 38px;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;
