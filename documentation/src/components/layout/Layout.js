import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Helmet from 'react-helmet';
import favicon from '../../../static/img/logo.svg';

const Layout = ({ children }) => {
  return (
    <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
