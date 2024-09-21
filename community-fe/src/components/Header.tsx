import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <NavLink to="/" end>
          홈
        </NavLink>
        <NavLink to="/best">
          베스트
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
