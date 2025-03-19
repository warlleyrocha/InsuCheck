import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  const navList = [
    { id: 'sobre', text: 'Sobre' },
    { id: 'funcionalidades', text: 'Funcionalidades' },
    { id: 'equipe', text: 'Equipe' },
  ];

  return (
    <header>
      <nav>
        <img src={logo} alt="Logo InsuCheck" width={186} height={68} />
        <div className="listaHeader">
          {navList.map((nav) => {
            return (
              <a key={nav.id} href={`#${nav.id}`}>
                <div>{nav.text}</div>
              </a>
            );
          })}
        </div>

        <div className="downloadBtn">
          <button>Download</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
