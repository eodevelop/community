import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PostDetailPage from '../pages/PostDetailPage';
import LoginPage from '../pages/LoginPage';
import PostListPage from '../pages/PostListPage';
import WritePage from '../pages/WritePage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/posts" element={<PostListPage />} />
      <Route path="/posts/:id" element={<PostDetailPage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
};

export default AppRouter;