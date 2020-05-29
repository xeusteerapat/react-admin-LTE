import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import QuestionTable from './QuestionTable';

const App = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <QuestionTable />
      <Footer />
    </div>
  );
};

export default App;
