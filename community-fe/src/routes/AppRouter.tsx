import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostDetailPage from '../pages/PostDetailPage';
import LoginPage from '../pages/LoginPage';
import PostListPage from '../pages/PostListPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
    </Routes>
  );
};

export default AppRouter;