import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
);

export const selectCollection = (collectionURLParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionURLParam] : null
  );

export const selectIsCollectionFetch = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
