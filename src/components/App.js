import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Question from './Question';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Question />
      <Footer />
    </div>
  );
};

export default App;
