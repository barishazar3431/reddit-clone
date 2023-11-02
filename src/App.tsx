import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/subreddit/PostDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPageLayout from './layouts/MainPageLayout';
import SubredditPage from './pages/subreddit/SubredditPage';
import UserPage from './pages/UserPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="posts/:id" element={<PostDetailPage />} />
        <Route path="/r/:id" element={<SubredditPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
