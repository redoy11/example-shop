import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Shelve from '../Containers/Shelve/Shelve';
import ConnectedCart from '../Containers/Cart/Cart';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/">
            <Header />
            <Shelve />
            <ConnectedCart />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
