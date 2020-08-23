import React from 'react';
import { ShopItem } from '../../store/ducks/shop';
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

/** type to describe Shelve Item props */
type ShelveItemProps = ShopItem;

const ShelveItem: React.FC<ShelveItemProps> = (props: ShelveItemProps) => {
  const { title, price, picture } = props;
  return (
    <Card className="ShelveItem-card">
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
      <CardActions>
        <Button size="small" color="primary">
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShelveItem;
