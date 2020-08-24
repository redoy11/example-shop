import React from 'react';
import './Product.scss';
import {
  ShopItem,
  addToCartAction,
  getQuantityById,
  getShopItemById,
  fetchShopItems,
} from '../../store/ducks/shop';
import { Store } from 'redux';
import { connect } from 'react-redux';
import {
  Typography,
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import withCart from '../../hocs/withCart/withCart';
import withHeader from '../../hocs/withHeader/withHeader';

interface ProductProps {
  id: string;
  count: number;
  item: ShopItem | null;
  addToCartActionCreator: typeof addToCartAction;
  fetchShopItemsActionCreator: typeof fetchShopItems;
}

const Product: React.FC<ProductProps> = (props: ProductProps) => {
  const {
    count,
    item,
    fetchShopItemsActionCreator,
    addToCartActionCreator,
  } = props;
  React.useEffect(() => {
    fetchShopItemsActionCreator();
  }, []);
  return (
    <>
      <Link to="/">Back</Link>
      {item && (
        <Card className="ProductItem-card">
          <CardActionArea>
            <CardMedia
              className="ProductItem-media"
              image={item.picture}
            ></CardMedia>
            <CardContent className="ProductItem-content">
              <Typography gutterBottom variant="h5" component="p">
                {item.title}
              </Typography>
              <Typography variant="h6" color="textSecondary" component="p">
                $ {item.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              onClick={() => {
                addToCartActionCreator(item._id, count + 1);
              }}
              disabled={count === item.stock}
              size="small"
              color="primary"
            >
              Add to cart
            </Button>
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
          </CardActions>
        </Card>
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
  fetchShopItemsActionCreator: fetchShopItems,
};

/** Connect Product to the redux store */
const ConnectedProduct = connect(mapStateToProps, mapDispatchToProps)(Product);

const ProductWithRouter: React.FC = () => {
  const { id } = useParams();
  return <ConnectedProduct id={id} />;
};

export default withCart(withHeader(ProductWithRouter));
