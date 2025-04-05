import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  justify-content: left;
  font-family: 'Urbanist', sans-serif;
  padding-top: 44px;
  padding-right: 158px;
  padding-bottom: 14px;
  padding-left: 278px;
  gap: 32px;
  background-color: rgba(253, 253, 253, 1);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding-top: 10px;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-weight: 400;
  gap: 20px;
  color: rgba(40, 40, 40, 1);

  transition: all 0.2s ease;

  a:first-child {
    border-right: 1px solid rgba(77, 77, 77, 0.2);
    padding-right: 20px;
  }

  a:hover {
    color: #000;
  }
`;

export const FooterContainer = styled.div`
  padding-top: 0;
  font-size: 14px;
  font-weight: 200;
  line-height: 18px;
  font-family: 'Urbanist', sans-serif;
`;
