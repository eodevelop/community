import React from 'react';
import PopularPosts from '../components/PopularPosts/PopularPosts';
import { dummyPosts } from '../dummy/dummyPosts';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const components = Array.from({ length: 3 }, (_, index) => (
    <PopularPosts
      key={index}
      title={`컴포넌트 ${index + 1}`}
      posts={dummyPosts}
    />
  ));

  return (
    <div className="home-page">
      <div className="popular-posts-container">{components}</div>
    </div>
  );
};

export default HomePage;
