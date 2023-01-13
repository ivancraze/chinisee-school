import React from 'react';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HomePage from '../../pages/home/HomePage';

const BaseLayout = () => {
  return (
    <div className="wrapper">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default BaseLayout;
