import React from 'react'
import { Container, Fundo, Text } from '../assets/styles/CarrosselTime.styles'
import Carousel from './slidesTime'
import teamMembers from './slidesTime/TeamMembers' // Importando o arquivo com os membros da equipe
import { useEffect, useState } from 'react';

const CarrosselTime = () => {
  const [slidesPerPage, setSlidesPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerPage(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerPage(2);
      } else {
        setSlidesPerPage(3);
      }
    };

    handleResize(); // set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Fundo>
      <Container>
        <Text>
          <h1>Nosso Time</h1>
          <p>Conheça as mentes criativas por trás do nosso produto. Nossa equipe é formada por especialistas dedicados a entregar a melhor experiência para você!</p>
        </Text>

        <Carousel slides={teamMembers} slidesPerPage={slidesPerPage} />
      </Container>
    </Fundo>
  )
}

export default CarrosselTime