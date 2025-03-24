import React from 'react';
import logo from '../assets/images/logo.svg';
import {
  Container,
  Nav,
  ListaHeader,
  Button,
} from '../assets/styles/Header.styles';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = () => {
  const headerRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(gsap.ScrollTrigger);
    
    gsap.ScrollTrigger.create({
      trigger: headerRef.current,
      start: 'top top',
      pin: true,
      pinSpacing: false
    });
  }, []);
  
  const navList = [
    { id: 'sobre', text: 'Sobre' },
    { id: 'funcionalidades', text: 'Funcionalidades' },
    { id: 'equipe', text: 'Equipe' },
  ];

  return (
    <header ref={headerRef} className="main-header">
      <Container>
        <Nav>
          <img src={logo} alt="Logo InsuCheck" width={138} height={68} />
          <ListaHeader>
            {navList.map((nav) => {
              return (
                <a key={nav.id} href={`#${nav.id}`}>
                  <div>{nav.text}</div>
                </a>
              );
            })}
          </ListaHeader>
          <Button>Download</Button>
        </Nav>
      </Container>
    </header>
  );
};

export default Header;
