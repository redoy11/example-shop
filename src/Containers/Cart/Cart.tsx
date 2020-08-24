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
import {
  List,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';
import CartItem from '../../Components/CartItem/CartItem';
import { Link } from 'react-router-dom';

interface CartProps {
  items: ShopItem[];
  cartObject: any;
  addToCartActionCreator: typeof addToCartAction;
}

const Cart: React.FC<CartProps> = (props: CartProps) => {
  const { cartObject, items, addToCartActionCreator } = props;
  const cartObjectKeys = lodash.keys(cartObject);
  let total = 0;
  const cartItems = cartObjectKeys
    .map((pid) => ({
      ...(lodash.find(items, { _id: pid }) || {}),
      count: cartObject[pid],
      addToCartHandler: addToCartActionCreator,
    }))
    .filter((item) => item.count !== 0);
  cartItems.forEach((item: any) => (total = total + item.count * item.price));
  return (
    <div className="Cart-container">
      <Typography variant="body2"> Cart </Typography>
      {cartItems.length > 0 && (
        <List className="list-container">
          {cartItems.map((item: any) => (
            <div key={item._id}>
              <CartItem {...item} />
            </div>
          ))}
          <Divider />
          <ListItem>
            <ListItemText primary={'Subtotal $ ' + total} secondary="" />
          </ListItem>
          <ListItem>
            <Link to="/checkout">
              <Button variant="contained" color="primary">
                Proceed to Checkout
              </Button>
            </Link>
          </ListItem>
        </List>
      )}
      {cartItems.length <= 0 && (
        <List>
          <ListItem>
            <ListItemText primary="No items to display" secondary="" />
          </ListItem>
        </List>
      )}
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
