import { createSelector } from 'reselect';

//input selector
const selectShop = (state) => state.shop;

//output selectors
export const selectCollections = createSelector(
   [selectShop],
   (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
   createSelector(
      [selectCollections],
      (collections) => collections[collectionUrlParam]
   );

export const selectCollectionsForPreview = createSelector(
   [selectCollections],
   (collections) => Object.keys(collections).map((key) => collections[key])
);
