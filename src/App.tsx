import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailsPage from './pages/PostDetailsPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPageLayout from './layouts/MainPageLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts/:id" element={<PostDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
