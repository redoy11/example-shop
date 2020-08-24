import React from 'react';
import {
  ShopItem,
  addToCartAction,
  getQuantityById,
} from '../../store/ducks/shop';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import './ShelveItem.scss';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/** interface to describe Shelve Item props */
interface ShelveItemProps extends ShopItem {
  cartCount: number;
  addToCartActionCreator: typeof addToCartAction;
}

const ShelveItem: React.FC<ShelveItemProps> = (props: ShelveItemProps) => {
  const {
    _id,
    title,
    price,
    picture,
    addToCartActionCreator,
    cartCount,
    stock,
  } = props;

  const addToCartHandler = () => {
    addToCartActionCreator(_id, cartCount + 1);
  };

  return (
    <Card className="ShelveItem-card">
      <Link to={`/product/${_id}`}>
        <CardActionArea>
          <CardMedia
            className="ShelveItem-media"
            image={picture}
            title="Contemplative Reptile"
          ></CardMedia>
          <CardContent className="ShelveItem-content">
            <Typography gutterBottom variant="body1" component="p">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          onClick={addToCartHandler}
          disabled={cartCount === stock}
          size="small"
          color="primary"
        >
          Add to cart
        </Button>
        {cartCount === stock && (
          <Typography
            style={{ color: 'red' }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Out of Stock
          </Typography>
        )}
      </CardActions>
    </Card>
  );
};

/** Connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  cartCount: number;
}

/** Map props to state  */
const mapStateToProps = (
  state: Partial<Store>,
  parentProps: any
): DispatchedStateProps => {
  const result = {
    cartCount: getQuantityById(state, parentProps._id),
  };
  return result;
};

/** Map props to actions */
const mapDispatchToProps = {
  addToCartActionCreator: addToCartAction,
};

/** Connect ShelveItem to the redux store */
const ConnectedShelveItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShelveItem);

export default ConnectedShelveItem;
