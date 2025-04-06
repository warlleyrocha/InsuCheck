import React from 'react';
import {
  Container,
  Text,
  BaseImage,
  OverlayImage,
  ImageStack,
  BlobDetalhe,
} from '../assets/styles/Intro.styles';
import { Button } from '../assets/styles/Banner.styles';
import IphoneImg from '../assets/images/1IPhone13Pro.svg';
import DetalheCirculos from '../assets/images/DetalheCirculos.svg';
import BlobAzul from '../assets/images/BlobAzul.svg'

const Intro = () => {
  return (
    <Container>
      <Text>
        <h1>Teste Nosso Aplicativo Agora!</h1>
        <p>
          Experimente as funcionalidades em primeira mão e nos dê seu feedback!
        </p>
        <Button>Teste o APK</Button>
      </Text>
      <ImageStack>
        <BaseImage src={DetalheCirculos} width={400} height={400} />
        <OverlayImage src={IphoneImg} width={275} height={595} />
      </ImageStack>
      <BlobDetalhe src={BlobAzul} width={185} height={125} />
    </Container>
  );
};

export default Intro;
