import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
