import { createSelector } from 'reselect';

// input selector
const selectCart = (state) => state.cart;

//output selector
export const selectCartitems = createSelector(
   [selectCart],
   (cart) => cart.cartItems
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
