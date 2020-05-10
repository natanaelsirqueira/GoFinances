import React, { useState, useEffect } from 'react';

import { useLocation, Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

enum Menu {
  Dashboard,
  Import,
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [currentPath, setCurrentPath] = useState('');
  const { pathname } = useLocation();

  useEffect(() => setCurrentPath(pathname), [pathname]);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={currentPath === '/' ? 'selected' : ''}>
            Listagem
          </Link>

          <Link
            to="/import"
            className={currentPath === '/import' ? 'selected' : ''}
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
