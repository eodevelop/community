import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BestPage from '../pages/BestPage';
import PostDetailPage from '../pages/PostDetailPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/best" element={<BestPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
    </Routes>
  );
};

export default AppRouter;