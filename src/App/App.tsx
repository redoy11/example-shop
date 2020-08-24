import React from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Shelve from '../Containers/Shelve/Shelve';
import ConnectedProduct from '../Containers/Product/Product';
import { fetchShopItems } from '../store/ducks/shop';
import { connect } from 'react-redux';
import ConnectedCheckout from '../Containers/Checkout/Checkout';

interface AppProps {
  fetchShopItemsActionCreator: typeof fetchShopItems;
}

const App: React.FC<AppProps> = (props: AppProps) => {
  const { fetchShopItemsActionCreator } = props;
  /** fetch the shop items from server on load */
  React.useEffect(() => {
    fetchShopItemsActionCreator();
  }, []);
  return (
    <React.Fragment>
      <Router basename="/">
        <Switch>
          <Route path="/product/:id">
            <ConnectedProduct />
          </Route>
          <Route path="/checkout">
            <ConnectedCheckout />
          </Route>
          <Route path="/">
            <Shelve />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

/** Connect the component to the store */

/** Map props to actions */
const mapDispatchToProps = {
  fetchShopItemsActionCreator: fetchShopItems,
};

/** Connect App to the redux store */
const ConnectedApp = connect(null, mapDispatchToProps)(App);

export default ConnectedApp;
