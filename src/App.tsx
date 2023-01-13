import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import BaseLayout from './layouts/BaseLayout';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import CoursePage from './pages/courses/CoursePage';
import ReviewsPage from './pages/reviews/ReviewsPage';
import NotFoundPage from './pages/not-found/NotFoundPage';
import NewsPage from './pages/news/NewsPage';

function App() {
  return (
    <BaseLayout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="**" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </BaseLayout>
  );
}

export default App;
