import React from 'react'
import { Container, Text } from '../assets/styles/Intro.styles'
import { Button } from '../assets/styles/Banner.styles'

const Intro = () => {
  return (
    <Container>
      <Text>
        <h1>Teste Nosso Aplicativo Agora!</h1>
        <p>Experimente as funcionalidades em primeira mão e nos dê seu feedback!</p>
        <Button>Teste o APK</Button>
      </Text>
    </Container>
  )
}

export default Intro