import React from 'react';
import './HomePage.scss';
import Header from '../components/Header';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <h1>커뮤니티에 오신 것을 환영합니다!</h1>
      <p>이곳은 React, TypeScript, SCSS로 만든 간단한 홈페이지입니다.</p>
    </div>
  );
};

export default HomePage;
