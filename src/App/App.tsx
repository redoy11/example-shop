import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shelve from '../Containers/Shelve/Shelve';
import ConnectedProduct from '../Containers/Product/Product';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/product/:id">
            <ConnectedProduct />
          </Route>
          <Route path="/">
            <Shelve />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
