import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/subreddit/PostDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPageLayout from './layouts/MainPageLayout';
import SubredditPage from './pages/subreddit/SubredditPage';
import UserPage from './pages/UserPage';
import ScrollToTop from './utils/ScrollToTop';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="r/:subredditId">
            <Route index element={<SubredditPage />} />
            <Route path="posts/:postId" element={<PostDetailPage />} />
          </Route>
          <Route path="user/:userId" element={<UserPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
