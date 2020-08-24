import React from 'react';
import { ShopItem } from '../../store/ducks/shop';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Icon,
} from '@material-ui/core';

/** Interface to describe CartItem props */
interface CartItemProps extends ShopItem {
  count: number;
  addToCartHandler: any;
}

const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const { _id, title, price, count, addToCartHandler, picture } = props;
  const removeHandler = () => {
    addToCartHandler(_id, 0);
  };
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar variant="square" alt="" src={picture} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={`${count} x $ ${price}`} />
      <ListItemSecondaryAction>
        <IconButton edge="start" aria-label="delete" onClick={removeHandler}>
          <Icon>clear</Icon>
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CartItem;
