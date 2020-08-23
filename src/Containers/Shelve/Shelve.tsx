import React from 'react';
import {
  getAllShopItems,
  ShopItem,
  setShopItems,
} from '../../store/ducks/shop';
import { Store } from 'redux';
import { connect } from 'react-redux';

/** Interface to describe Shelve props */
interface ShelveProps {
  items: ShopItem[];
  setShopItemsActionCreator: typeof setShopItems;
}

const Shelve: React.FC<ShelveProps> = (props: ShelveProps) => {
  const { items, setShopItemsActionCreator } = props;
  React.useEffect(() => {
    setShopItemsActionCreator([
      {
        _id: '5f4011d1fadf274a8862865a',
        title: 'ad labore tempor eiusmod et',
        description:
          'Minim enim deserunt id aliquip tempor elit amet culpa voluptate officia pariatur voluptate adipisicing. Enim ex anim enim voluptate minim esse. Dolore dolore ad nostrud sint. Adipisicing ex voluptate veniam in elit pariatur irure pariatur tempor irure ex amet quis. Proident incididunt non qui consequat duis Lorem in labore sunt Lorem adipisicing anim eiusmod. Nisi Lorem nostrud deserunt reprehenderit enim quis eu duis minim enim. Eiusmod anim voluptate dolore exercitation qui cupidatat nostrud pariatur.\r\nId laborum velit Lorem culpa. Ipsum velit laboris est laborum minim exercitation. Pariatur esse occaecat occaecat duis eiusmod reprehenderit labore commodo officia ea. Labore ut labore ad in. Elit consequat do fugiat sit. Ex eu dolor nulla quis ipsum. Adipisicing velit duis excepteur fugiat.\r\n',
        picture: 'http://placehold.it/500x500',
        price: 37,
        stock: 7,
      },
    ]);
  }, []);

  return (
    <div>
      {items.map((item) => (
        <>{item.title}</>
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
  setShopItemsActionCreator: setShopItems,
};

/** Connect Shelve to the redux store */
const ConnectedShelve = connect(mapStateToProps, mapDispatchToProps)(Shelve);

export default ConnectedShelve;
