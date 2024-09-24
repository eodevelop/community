// src/components/Header.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-left">
        <NavLink to="/" end>
          홈
        </NavLink>
        <NavLink to="/best">베스트</NavLink>
      </nav>
      <nav className="nav-right">
        <NavLink to="/login" className="login-button">
          로그인
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;