import React from 'react'
import PipocaAgilLogo from '../assets/images/PipocaAgilLogo.svg'
import { Container, Text, Links, FooterContainer } from '../assets/styles/Footer.styles';


const Footer = () => {
  return (
    <Container>
      <img src={PipocaAgilLogo} width={65} height={65} />

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
  )
}

export default Footer