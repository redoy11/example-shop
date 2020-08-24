import React from 'react';
import './Product.scss';
import {
  ShopItem,
  addToCartAction,
  getQuantityById,
  getShopItemById,
} from '../../store/ducks/shop';
import { Store } from 'redux';
import { connect } from 'react-redux';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Tabs,
  Tab,
  Icon,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import withCart from '../../hocs/withCart/withCart';
import withHeader from '../../hocs/withHeader/withHeader';
import withProductId from '../../hocs/withProductId/withProductId';
import Order from '../../Components/Order/Order';

interface ProductProps {
  id: string;
  count: number;
  item: ShopItem | null;
  addToCartActionCreator: typeof addToCartAction;
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const { count, item, addToCartActionCreator } = props;
  return (
    <>
      <Link className="back-btn" to="/">
        <Icon> keyboard_backspace_icon</Icon> Return to List
      </Link>
      {item && (
        <React.Fragment>
          <Card className="Product-card">
            <CardMedia
              className="Product-media"
              image={item.picture}
            ></CardMedia>
            <CardContent className="Product-content">
              <Typography gutterBottom variant="h5" component="p">
                {item.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                $ {item.price}
              </Typography>
              {count === item.stock && (
                <Typography
                  style={{ color: 'red' }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Out of Stock
                </Typography>
              )}
              <Order
                stock={item.stock}
                cartCount={count}
                setHandler={(value: number) =>
                  addToCartActionCreator(item._id, value)
                }
              />
            </CardContent>
          </Card>
          <div className="Product-tab-section">
            <Tabs className="Product-tabs">
              <Tab className="Product-tab" label="Description" />
            </Tabs>
            <Typography
              className="Product-tab-content"
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {item.description}
            </Typography>
          </div>
        </React.Fragment>
      )}
    </>
  );
};

/** Connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps extends Partial<ShopItem> {
  count: number;
  item: ShopItem | null;
}

/** Map props to state  */
const mapStateToProps = (
  state: Partial<Store>,
  parentProps: any
): DispatchedStateProps => {
  const getProduct = (id: string) => getShopItemById(state, id);
  const getQuantity = (id: string) => getQuantityById(state, id);
  const result = {
    count: getQuantity(parentProps.id),
    item: getProduct(parentProps.id),
  };
  return result;
};

/** Map props to actions */
const mapDispatchToProps = {
  addToCartActionCreator: addToCartAction,
};

/** Connect Product to the redux store */
const ConnectedProduct = connect(mapStateToProps, mapDispatchToProps)(Product);

export default withCart(withHeader(withProductId(ConnectedProduct)));
