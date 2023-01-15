import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import { store } from './store';

import BaseLayout from './layouts/BaseLayout';
import ModalLayout from './layouts/ModalLayout';
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
    <Provider store={store}>
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
          <ModalLayout />
        </BrowserRouter>
      </BaseLayout>
    </Provider>
  );
}

export default App;
