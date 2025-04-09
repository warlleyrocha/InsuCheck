import styled from 'styled-components';

export const SCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SSlidesArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SSlidesContainer = styled.div`
  display: flex;
  overflow: visible;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 0 60px; // espaço para os botões
`;

export const SButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  padding: 2px 7px;
  border-radius: 100%;
  cursor: pointer;
  z-index: 2;

  ${({ left }) => left && `
    left: -70px;
  `}

  ${({ right }) => right && `
    right: -70px;
  `}

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 8px 12px;
  }
`;

export const SPagination = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  gap: 8px;

  button {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: none;
    background: #C4D8FF;
    cursor: pointer;

    &.active {
      background: #2F39D3;
    }
  }

  @media (max-width: 768px) {
    gap: 6px;
  }
`;