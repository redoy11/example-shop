import React from 'react';
import { ShopItem } from '../../store/ducks/shop';
import {
  Avatar,
  IconButton,
  Icon,
  TableRow,
  TableCell,
} from '@material-ui/core';
import Order from '../Order/Order';
import './CheckoutItem.scss';

/** Interface to describe CheckoutItem props */
interface CheckoutItemProps extends ShopItem {
  count: number;
  addToCartHandler: any;
}

const CheckoutItem: React.FC<CheckoutItemProps> = (
  props: CheckoutItemProps
) => {
  const { _id, title, price, count, addToCartHandler, picture, stock } = props;
  const removeHandler = () => {
    addToCartHandler(_id, 0);
  };
  const setHandler = (value: number) => {
    addToCartHandler(_id, value);
  };
  return (
    <TableRow>
      <TableCell align="right">
        <IconButton onClick={removeHandler} size="small">
          <Icon>clear </Icon>
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <div className="CheckoutItem-description">
          <Avatar variant="square" alt="" src={picture} />
          {title}
        </div>
      </TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">
        <Order
          stock={stock}
          cartCount={count}
          setHandler={setHandler}
          withoutLabel={true}
        />
      </TableCell>
      <TableCell align="right">{price * count}</TableCell>
    </TableRow>
  );
};

export default CheckoutItem;
