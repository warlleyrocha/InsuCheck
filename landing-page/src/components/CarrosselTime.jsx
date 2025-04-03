import React from 'react'
import { Container, Fundo, Text } from '../assets/styles/CarrosselTime.styles'
import Carousel from './slidesTime'
import Weslley from "../assets/images/time/Weslley.png";
import Olivia from "../assets/images/time/Olivia.png";
import Warlley from "../assets/images/time/Warlley.png";

const teamMembers = [
  {
    image: Weslley,
    name: "Weslley Mariano",
    role: "Product Owner",
    description: "Como Product Owner, aplico minha expertise em gestão de produtos, experiência do usuário e tomada de decisões baseadas em dados para criar soluções eficientes e alinhadas com as necessidades dos usuários e objetivos do negócio.",
  },
  {
    image: Olivia,
    name: "Olívia Mara",
    role: "Scrum Master",
    description: "Especializada em alta performance de equipes por meio de um ambiente colaborativo e motivador. Com foco em comunicação aberta, celebração de conquistas e dinâmicas estratégicas, promove agilidade nas decisões, qualidade nas entregas e engajamento.",
  },
  {
    image: Warlley,
    name: "Warlley Rocha",
    role: "Front End",
    description: "Especializado em criar interfaces intuitivas, integrar APIs REST e gerenciar estados com Redux para armazenamento e compartilhamento de dados no aplicativo.",
  },
  {
    image: Weslley,
    name: "Weslley Mariano",
    role: "Product Owner",
    description: "Como Product Owner, aplico minha expertise em gestão de produtos, experiência do usuário e tomada de decisões baseadas em dados para criar soluções eficientes e alinhadas com as necessidades dos usuários e objetivos do negócio.",
  },
  {
    image: Olivia,
    name: "Olívia Mara",
    role: "Scrum Master",
    description: "Especializada em alta performance de equipes por meio de um ambiente colaborativo e motivador. Com foco em comunicação aberta, celebração de conquistas e dinâmicas estratégicas, promove agilidade nas decisões, qualidade nas entregas e engajamento.",
  },
  {
    image: Warlley,
    name: "Warlley Rocha",
    role: "Front End",
    description: "Especializado em criar interfaces intuitivas, integrar APIs REST e gerenciar estados com Redux para armazenamento e compartilhamento de dados no aplicativo.",
  },
  {
    image: Weslley,
    name: "Weslley Mariano",
    role: "Product Owner",
    description: "Como Product Owner, aplico minha expertise em gestão de produtos, experiência do usuário e tomada de decisões baseadas em dados para criar soluções eficientes e alinhadas com as necessidades dos usuários e objetivos do negócio.",
  },
  {
    image: Olivia,
    name: "Olívia Mara",
    role: "Scrum Master",
    description: "Especializada em alta performance de equipes por meio de um ambiente colaborativo e motivador. Com foco em comunicação aberta, celebração de conquistas e dinâmicas estratégicas, promove agilidade nas decisões, qualidade nas entregas e engajamento.",
  },
  {
    image: Warlley,
    name: "Warlley Rocha",
    role: "Front End",
    description: "Especializado em criar interfaces intuitivas, integrar APIs REST e gerenciar estados com Redux para armazenamento e compartilhamento de dados no aplicativo.",
  },
  {
    image: Weslley,
    name: "Weslley Mariano",
    role: "Product Owner",
    description: "Como Product Owner, aplico minha expertise em gestão de produtos, experiência do usuário e tomada de decisões baseadas em dados para criar soluções eficientes e alinhadas com as necessidades dos usuários e objetivos do negócio.",
  },
  {
    image: Olivia,
    name: "Olívia Mara",
    role: "Scrum Master",
    description: "Especializada em alta performance de equipes por meio de um ambiente colaborativo e motivador. Com foco em comunicação aberta, celebração de conquistas e dinâmicas estratégicas, promove agilidade nas decisões, qualidade nas entregas e engajamento.",
  },
  {
    image: Warlley,
    name: "Warlley Rocha",
    role: "Front End",
    description: "Especializado em criar interfaces intuitivas, integrar APIs REST e gerenciar estados com Redux para armazenamento e compartilhamento de dados no aplicativo.",
  },
  {
    image: Weslley,
    name: "Weslley Mariano",
    role: "Product Owner",
    description: "Como Product Owner, aplico minha expertise em gestão de produtos, experiência do usuário e tomada de decisões baseadas em dados para criar soluções eficientes e alinhadas com as necessidades dos usuários e objetivos do negócio.",
  },
  {
    image: Olivia,
    name: "Olívia Mara",
    role: "Scrum Master",
    description: "Especializada em alta performance de equipes por meio de um ambiente colaborativo e motivador. Com foco em comunicação aberta, celebração de conquistas e dinâmicas estratégicas, promove agilidade nas decisões, qualidade nas entregas e engajamento.",
  },
  {
    image: Warlley,
    name: "Warlley Rocha",
    role: "Front End",
    description: "Especializado em criar interfaces intuitivas, integrar APIs REST e gerenciar estados com Redux para armazenamento e compartilhamento de dados no aplicativo.",
  },
];
const CarrosselTime = () => {

  return (
    <Fundo>
      <Container>
        <Text>
          <h1>Nosso Time</h1>
          <p>Conheça as mentes criativas por trás do nosso produto. Nossa equipe é formada por especialistas dedicados a entregar a melhor experiência para você!</p>
        </Text>

        <Carousel slides={teamMembers} slidesPerPage={3} />
      </Container>
    </Fundo>
  )
}

export default CarrosselTime