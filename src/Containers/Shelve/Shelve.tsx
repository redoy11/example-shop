import React from 'react';
import {
  getAllShopItems,
  ShopItem,
  fetchShopItems,
} from '../../store/ducks/shop';
import { Store } from 'redux';
import { connect } from 'react-redux';

/** Interface to describe Shelve props */
interface ShelveProps {
  items: ShopItem[];
  fetchShopItemsActionCreator: typeof fetchShopItems;
}

const Shelve: React.FC<ShelveProps> = (props: ShelveProps) => {
  const { items, fetchShopItemsActionCreator } = props;
  React.useEffect(() => {
    fetchShopItemsActionCreator();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <>
          {item.title}
          <br />
        </>
      ))}
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

export default ConnectedShelve;
