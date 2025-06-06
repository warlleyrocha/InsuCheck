import React from 'react';
import logo from '../assets/images/logo.svg';
import {
  Container,
  Nav,
  ListaHeader,
  Button,
} from '../assets/styles/Header.styles';

const Header = () => {
  
  const navList = [
    { id: 'sobre', text: 'Sobre' },
    { id: 'funcionalidades', text: 'Funcionalidades' },
    { id: 'equipe', text: 'Equipe' },
  ];

  return (
      <Container>
        <Nav>
          <img src={logo} alt="Logo InsuCheck" width={250} height={68} />
          <ListaHeader>
            {navList.map((nav) => {
              return (
                <a key={nav.id} href={`#${nav.id}`}>
                  <div>{nav.text}</div>
                </a>
              );
            })}
          </ListaHeader>
          <Button onClick={() => window.open ('https://github.com/Ameglebm/AppPipocaAgil', '_blank', 'noopener,noreferrer')}>Download</Button>
        </Nav>
      </Container>
  );
};

export default Header;
