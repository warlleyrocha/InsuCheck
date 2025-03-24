import styled from 'styled-components';

export const Container = styled.div`
  font-family: font/family/Body;
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(253, 253, 253, 1);
  justify-content: center;
  width: 50%;

  img {
    padding-top: 200px;
  }
`;

export const ContainerTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: relative;
  width: 50%;
  padding-top: 248px;

  ::before {
    content: '';
    position: absolute;
    width: 25px;
    height: 23px;
    background-image: url('DetalheAzul');
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
  }

  h1 {
    color: rgba(34, 34, 34, 1);
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: rgba(51, 51, 51, 1);
  }
`;

export const Button = styled.div`
  background-color: #2f39d3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  line-height: 24px;
  font-size: 14px;
  border: 1px solid #2f39d3;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  padding-top: 10px;
  padding-right: 22px;
  padding-bottom: 10px;
  padding-left: 22px;
  width: fit-content;

  &:hover {
    background-color: #fff;
    color: #2f39d3;
    border-color: #2f39d3;
  }
`;
