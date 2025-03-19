import React from 'react';
import logo from '../assets/logo.svg';
import { Container, Nav, ListaHeader } from '../Styles';

const Header = () => {
  const navList = [
    { id: 'sobre', text: 'Sobre' },
    { id: 'funcionalidades', text: 'Funcionalidades' },
    { id: 'equipe', text: 'Equipe' },
  ];

  return (
    <Container>
      <Nav>
        <img src={logo} alt="Logo InsuCheck" width={186} height={68} />
        <ListaHeader>
          {navList.map((nav) => {
            return (
              <a key={nav.id} href={`#${nav.id}`}>
                <div>{nav.text}</div>
              </a>
            );
          })}
        </ListaHeader>

        <div className="downloadBtn">
          <button>Download</button>
        </div>
      </Nav>
    </Container>
  );
};

export default Header;
