import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import QuestionTable from './QuestionTable';
import QuestionDetail from './QuestionDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Switch>
        <Route exac path='/questions' component={QuestionTable} />
        <Route
          exac
          path='/question/:id'
          render={routeProps => (
            <QuestionDetail id={routeProps.match.params.id} />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
