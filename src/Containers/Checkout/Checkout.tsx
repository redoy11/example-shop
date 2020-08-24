import React from 'react';
import './Checkout.scss';
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
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';

interface CheckoutProps {
  items: ShopItem[];
  cartObject: any;
  addToCartActionCreator: typeof addToCartAction;
}

const Checkout: React.FC<CheckoutProps> = (props: CheckoutProps) => {
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
    <div className="Checkout-container">
      <Typography variant="body2"> Checkout </Typography>
      {cartItems.length > 0 && (
        <div className="Checkout-items-container">
          <div className="Checkout-items-section">
            <TableContainer className="Checkout-table" component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item: any) => (
                    <CheckoutItem key={item._id} {...item} />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
      {cartItems.length <= 0 && <Redirect to="/" />}
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

/** Connect Checkout to the redux store */
const ConnectedCheckout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

export default ConnectedCheckout;
