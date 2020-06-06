import { createSelector } from 'reselect';
import { selectCurrentUser } from './../user/user.selector';

// input selector
const selectCart = (state) => state.cart;

//output selector
export const selectCartitems = createSelector(
   [selectCart],
   (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
   [selectCart],
   (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
   [selectCartitems],
   (cartItems) =>
      cartItems.reduce(
         (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
         0
      )
);

export const selectCartTotal = createSelector([selectCartitems], (cartItems) =>
   cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
         accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
   )
);
