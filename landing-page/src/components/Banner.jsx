import React from 'react';
import iPhone13pro from '../assets/images/iPhone13pro.svg';
import { Container, ContainerTexto, Button } from '../assets/styles/Banner.styles';

const Banner = () => {
  return (
    <Container>
      <ContainerTexto>
        <h1>Monitore sua Diabetes com Precisão e Facilidade</h1>
        <p>
          Acompanhe sua glicemia em tempo real, receba alertas inteligentes e
          viva com mais tranquilidade.
        </p>
        <Button onClick={() => window.open ('https://github.com/Ameglebm/AppPipocaAgil', '_blank', 'noopener,noreferrer')}>Teste o APK</Button>
      </ContainerTexto>
      <img src={iPhone13pro} width={560} height={560} />
    </Container>
  );
};

export default Banner;
