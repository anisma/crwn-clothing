import { createSelector } from 'reselect';

//input selector
const selectShop = (state) => state.shop;

//output selectors
export const selectCollections = createSelector(
   [selectShop],
   (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) => {
   return createSelector([selectCollections], (collections) =>
      collections ? collections[collectionUrlParam] : null
   );
};
export const selectCollectionsForPreview = createSelector(
   [selectCollections],
   (collections) =>
      collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectIsCollectionsFetching = createSelector(
   [selectShop],
   (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
   [selectShop],
   (shop) => !!shop.collections
);
