import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';

/** interface for ShopItem  object */
export interface ShopItem {
  _id: string;
  title: string;
  description: string;
  picture: string;
  price: number;
  stock: number;
}

/** The reducer name */
export const reducerName = 'shop';

// actions
/** action types */
export const SET_SHOP_ITEMS = 'shop/reducer/shop/SET_SHOP_ITEMS';

/** interface for SET_SHOP_ITEMS action */
export interface SetShopItemsAction extends AnyAction {
  items: ShopItem[];
  type: typeof SET_SHOP_ITEMS;
}

/** Create type for reducer actions */
export type ShopActionTypes = SetShopItemsAction | AnyAction;

// action creators

/** set shop items action creator
 * @param {ShopItem[]} items - shop items to be set
 * @returns {SetShopItemsAction} - an action to set items in store
 */
export const setShopItems = (items: ShopItem[]): SetShopItemsAction => ({
  items,
  type: SET_SHOP_ITEMS,
});

// the reducer

/** interface for shop state in redux store */
interface ShopState {
  shopItems: ShopItem[];
}

/** Create an immutable shop state */
export type ImmutableShopState = SeamlessImmutable.ImmutableObject<ShopState>;

/** initial shop state */
const initialState: ImmutableShopState = SeamlessImmutable({
  shopItems: [],
});

/** the shop reducer function */
export default function reducer(
  state: ImmutableShopState = initialState,
  action: ShopActionTypes
): ImmutableShopState {
  switch (action.type) {
    case SET_SHOP_ITEMS:
      return SeamlessImmutable({
        shopItems: action.items,
      });
    default:
      return state;
  }
}

// selectors

/** returns all the shop items
 * @param {Partial<Store>} state - the redux store
 * @returns { ShopItem[] } - the existing items
 */
export function getAllShopItems(state: Partial<Store>): ShopItem[] {
  return (state as any)[reducerName].shopItems;
}
