import React from 'react';
import './Cart.scss';
import {
  ShopItem,
  getAllShopItems,
  addToCartAction,
  getCartValues,
} from '../../store/ducks/shop';
import { Store } from 'redux';
import { connect } from 'react-redux';
import lodash from 'lodash';
import { List } from '@material-ui/core';

interface CartProps {
  items: ShopItem[];
  cartObject: any;
  addToCartActionCreator: typeof addToCartAction;
}

const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { cartObject, items } = props;
  const cartObjectKeys = lodash.keys(cartObject);
  const cartItems = cartObjectKeys
    .map((pid) => ({
      ...(lodash.find(items, { _id: pid }) || {}),
      value: cartObject[pid],
    }))
    .filter((item) => item.value !== 0);
  return (
    <div>
      <List className="list-container">
        {cartItems.map((item: any) => (
          <div key={item._id}>{item.title}</div>
        ))}
      </List>
    </div>
  );
};

/** Connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  items: ShopItem[];
  cartObject: any;
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const result = {
    items: getAllShopItems(state),
    cartObject: getCartValues(state),
  };
  return result;
};

/** Map props to actions */
const mapDispatchToProps = {
  addToCartActionCreator: addToCartAction,
};

/** Connect Cart to the redux store */
const ConnectedCart = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default ConnectedCart;
