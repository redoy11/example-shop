import React from 'react';
import {
  getAllShopItems,
  ShopItem,
  fetchShopItems,
} from '../../store/ducks/shop';
import { Store } from 'redux';
import { connect } from 'react-redux';
import lodash from 'lodash';
import { TextField, MenuItem, Typography } from '@material-ui/core';
import ShelveItem from '../ShelveItem/ShelveItem';
import './Shelve.scss';
import withCart from '../../hocs/withCart/withCart';
import withHeader from '../../hocs/withHeader/withHeader';

/** Interface to describe Shelve props */
interface ShelveProps {
  items: ShopItem[];
  fetchShopItemsActionCreator: typeof fetchShopItems;
}

/** Interface to describe items order option */
interface OrderOption {
  label: string;
  value: 'asc' | 'desc';
}

/** Available item order option */
const ORDER_OPTIONS: OrderOption[] = [
  { label: 'Sort by price high to low', value: 'desc' },
  { label: 'Sort by price low to high', value: 'asc' },
];

const Shelve: React.FC<ShelveProps> = (props: ShelveProps) => {
  const { items, fetchShopItemsActionCreator } = props;

  // component based states
  /** showcasedItems are items that are viewable to shelves */
  const [showcasedItems, setShowcasedItems] = React.useState<ShopItem[]>([]);
  /** manages the order state of items based on price property*/
  const [isOrderAsc, setOrderAsc] = React.useState<boolean>(false);

  /** fetch the shop items from server on load */
  React.useEffect(() => {
    fetchShopItemsActionCreator();
  }, []);

  /** update the showcasedItems based on changes of items or price order  */
  React.useEffect(() => {
    if (isOrderAsc) {
      setShowcasedItems(lodash.orderBy(items, ['price'], ['asc']));
    } else {
      setShowcasedItems(lodash.orderBy(items, ['price'], ['desc']));
    }
  }, [items, isOrderAsc]);

  /**
   * Updates order option based on selected option
   * @param {React.ChangeEvent<HTMLInputElement>} event - order option change event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setOrderAsc(event.target.value === 'asc' ? true : false);

  return (
    <div className="Shelve-container">
      <div className="Shelve-header">
        <Typography variant="body2">
          Showing {showcasedItems.length} out of {showcasedItems.length} items
        </Typography>
        <TextField
          select
          label=""
          value={isOrderAsc ? 'asc' : 'desc'}
          onChange={handleChange}
        >
          {ORDER_OPTIONS.map((option: OrderOption) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div className="Shelve-body">
        {showcasedItems.map((item) => (
          <ShelveItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

/** Connect the component to the store */

/** Interface to describe props from mapStateToProps */
interface DispatchedStateProps {
  items: ShopItem[];
}

/** Map props to state  */
const mapStateToProps = (state: Partial<Store>): DispatchedStateProps => {
  const result = {
    items: getAllShopItems(state),
  };
  return result;
};

/** Map props to actions */
const mapDispatchToProps = {
  fetchShopItemsActionCreator: fetchShopItems,
};

/** Connect Shelve to the redux store */
const ConnectedShelve = connect(mapStateToProps, mapDispatchToProps)(Shelve);

export default withCart(withHeader(ConnectedShelve));
