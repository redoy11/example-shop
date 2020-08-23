import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';
import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';

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
export const FETCH_SHOP_ITEMS = 'shop/reducer/shop/SET_FETCH_ITEMS';
export const ADD_TO_CART = 'shop/reducer/shop/ADD_TO_CART';

/** interface for SET_SHOP_ITEMS action */
export interface SetShopItemsAction extends AnyAction {
  items: ShopItem[];
  type: typeof SET_SHOP_ITEMS;
}

/** interface for FETCH_SHOP_ITEMS action */
export interface FetchShopItemsAction extends AnyAction {
  type: typeof FETCH_SHOP_ITEMS;
}

/** interface for ADD_TO_CART action */
export interface AddToCartAction extends AnyAction {
  productId: string;
  quantity: number;
  type: typeof ADD_TO_CART;
}

/** Create type for reducer actions */
export type ShopActionTypes =
  | FetchShopItemsAction
  | SetShopItemsAction
  | AddToCartAction
  | AnyAction;

// action creators

/** set shop items action creator
 * @param {ShopItem[]} items - shop items to be set
 * @returns {SetShopItemsAction} - an action to set items in store
 */
export const setShopItems = (items: ShopItem[]): SetShopItemsAction => ({
  items,
  type: SET_SHOP_ITEMS,
});

/** fetch shop items from the server
 * @returns {FetchShopItemsAction} - an action to fetch items from server
 */
export const fetchShopItems = (): FetchShopItemsAction => ({
  type: FETCH_SHOP_ITEMS,
});

/**
 * add items to cart
 * @param {string} productId -  the product that is added
 * @param  {number} quantity - the quantity that is added to cart
 * @returns {AddToCartAction} - an action to add items to cart in store
 */
export const addToCartAction = (
  productId: string,
  quantity: number
): AddToCartAction => ({
  productId,
  quantity,
  type: ADD_TO_CART,
});

// epics

/**
 * rxjs based epic to fetch shop items list from server
 * @param {Observable<ShopActionTypes>} action$ - a series of actions observables
 * @returns {Observable<Exclude<ShopActionTypes, FetchShopItemsAction>>} - an action observable other than the FETCH_SHOP_ITEMS
 */
export const fetchShopItemsEpic = (
  action$: Observable<ShopActionTypes>
): Observable<Exclude<ShopActionTypes, FetchShopItemsAction>> =>
  action$.pipe(
    ofType(FETCH_SHOP_ITEMS),
    mergeMap(() =>
      ajax
        .getJSON(
          `https://gist.githubusercontent.com/naieem/c138ff1f12847b2a1b8ad85866426d3d/raw/037825eee126d589ab3e1fff6c3d0119f33f3b5b/Products`
        )
        .pipe(map((response) => setShopItems(response as ShopItem[])))
    )
  );

// the reducer

/** interface for shop state in redux store */
interface ShopState {
  shopItems: ShopItem[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  cart: object;
}

/** Create an immutable shop state */
export type ImmutableShopState = SeamlessImmutable.Immutable<ShopState>;

/** initial shop state */
const initialState: ImmutableShopState = SeamlessImmutable({
  shopItems: [],
  cart: {},
});

/** the shop reducer function */
export default function reducer(
  state: ImmutableShopState = initialState,
  action: ShopActionTypes
): ImmutableShopState {
  switch (action.type) {
    case SET_SHOP_ITEMS:
      return SeamlessImmutable({
        ...state,
        shopItems: action.items,
      });
    case ADD_TO_CART:
      return SeamlessImmutable({
        ...state,
        cart: {
          ...state.cart,
          [action.productId]: action.quantity,
        },
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
