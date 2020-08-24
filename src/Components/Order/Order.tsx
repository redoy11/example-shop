import React from 'react';
import './Order.scss';
import {
  Button,
  Icon,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core';

interface OrderProps {
  setHandler: (value: number) => void;
  cartCount: number;
  stock: number;
}

const Order: React.FC<OrderProps> = (props: OrderProps) => {
  const { stock, cartCount, setHandler } = props;
  const [count, setCount] = React.useState<number>(cartCount);
  const freeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const requestedValue = parseInt(event.target.value);
    if (requestedValue > stock) {
      setHandler(stock);
    } else if (requestedValue < 0) {
      setHandler(0);
    } else {
      setHandler(requestedValue);
    }
  };

  React.useEffect(() => {
    setCount(cartCount);
  }, [cartCount]);

  const addToCartHandler = () => {
    setHandler(cartCount + 1);
  };

  const removeToCartHandler = () => {
    setHandler(cartCount - 1);
  };

  const setCountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(event.target.value));
  };

  return (
    <div className="Order-container">
      {cartCount > 0 ? (
        <React.Fragment>
          <IconButton
            style={{ color: 'red' }}
            size="small"
            onClick={removeToCartHandler}
          >
            <Icon>remove</Icon>
          </IconButton>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className="Order-label"
          >
            <Icon className="cart-icon">add_shopping_cart</Icon>{' '}
            <div>Added</div>
            <TextField
              className="Order-count"
              type="number"
              value={count}
              onChange={setCountHandler}
              onBlur={freeInputHandler as any}
            />
          </Typography>
          <IconButton
            size="small"
            onClick={addToCartHandler}
            style={{ color: cartCount === stock ? 'inherit' : 'blue' }}
            disabled={cartCount === stock}
          >
            <Icon>add</Icon>
          </IconButton>
        </React.Fragment>
      ) : (
        <Button
          onClick={addToCartHandler}
          disabled={cartCount === stock}
          size="small"
          color="primary"
        >
          <Icon>add_shopping_cart</Icon> Add to cart
        </Button>
      )}
    </div>
  );
};

export default Order;
