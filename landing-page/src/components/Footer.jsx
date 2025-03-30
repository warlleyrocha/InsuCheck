import React from 'react';
import PipocaAgilLogo from '../assets/images/PipocaAgilLogo.svg';
import {
  Container,
  Text,
  Links,
  FooterContainer,
} from '../assets/styles/Footer.styles';

const Footer = () => {
  return (
    <Container>
      <a
        href="https://pipocaagil.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={PipocaAgilLogo} width={65} height={65} alt="Pipoca Ágil" />
      </a>

      <Text>
        <Links>
          <a>Política de Privacidade</a>
          <a>Termos de Uso</a>
        </Links>

        <FooterContainer>
          <p>© 2025 InsuCheck. Projeto Voluntário.</p>
        </FooterContainer>
      </Text>
    </Container>
  );
};

export default Footer;
